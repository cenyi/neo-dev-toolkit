
import { useState, useEffect } from 'react';

export interface RegexFlags {
  global: boolean;
  ignoreCase: boolean;
  multiline: boolean;
  dotAll: boolean;
  unicode: boolean;
  sticky: boolean;
}

export interface RegexMatch {
  match: string;
  index: number;
  groups?: string[];
}

export const useRegexTool = () => {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [replacement, setReplacement] = useState('');
  const [flags, setFlags] = useState<RegexFlags>({
    global: false,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    unicode: false,
    sticky: false,
  });
  const [matches, setMatches] = useState<RegexMatch[]>([]);
  const [replacedText, setReplacedText] = useState('');
  const [isValidRegex, setIsValidRegex] = useState(true);
  const [error, setError] = useState('');

  const buildRegexFlags = (flags: RegexFlags): string => {
    let flagString = '';
    if (flags.global) flagString += 'g';
    if (flags.ignoreCase) flagString += 'i';
    if (flags.multiline) flagString += 'm';
    if (flags.dotAll) flagString += 's';
    if (flags.unicode) flagString += 'u';
    if (flags.sticky) flagString += 'y';
    return flagString;
  };

  const testRegex = () => {
    if (!pattern) {
      setMatches([]);
      setReplacedText('');
      setIsValidRegex(true);
      setError('');
      return;
    }

    try {
      const flagString = buildRegexFlags(flags);
      const regex = new RegExp(pattern, flagString);
      setIsValidRegex(true);
      setError('');

      // Find matches
      const foundMatches: RegexMatch[] = [];
      if (flags.global) {
        let match;
        while ((match = regex.exec(testString)) !== null) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
          // Prevent infinite loop
          if (!flags.global) break;
        }
      } else {
        const match = regex.exec(testString);
        if (match) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }
      setMatches(foundMatches);

      // Create replaced text
      if (replacement) {
        const replaced = testString.replace(regex, replacement);
        setReplacedText(replaced);
      } else {
        setReplacedText('');
      }
    } catch (err) {
      setIsValidRegex(false);
      setError(err instanceof Error ? err.message : 'Invalid regular expression');
      setMatches([]);
      setReplacedText('');
    }
  };

  useEffect(() => {
    testRegex();
  }, [pattern, testString, replacement, flags]);

  const updateFlag = (flag: keyof RegexFlags, value: boolean) => {
    setFlags(prev => ({ ...prev, [flag]: value }));
  };

  const clearAll = () => {
    setPattern('');
    setTestString('');
    setReplacement('');
    setFlags({
      global: false,
      ignoreCase: false,
      multiline: false,
      dotAll: false,
      unicode: false,
      sticky: false,
    });
    setMatches([]);
    setReplacedText('');
    setIsValidRegex(true);
    setError('');
  };

  return {
    pattern,
    setPattern,
    testString,
    setTestString,
    replacement,
    setReplacement,
    flags,
    updateFlag,
    matches,
    replacedText,
    isValidRegex,
    error,
    clearAll,
  };
};
