
import { useState } from 'react';
import { create } from 'jsondiffpatch';
import { format as formatHtml } from 'jsondiffpatch/formatters/html';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';

const exampleJson1 = JSON.stringify({
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["History", "Math"],
    "contact": {
        "email": "john.doe@example.com"
    }
}, null, 2);

const exampleJson2 = JSON.stringify({
    "name": "John Doe",
    "age": 31,
    "isStudent": true,
    "courses": ["History", "Science"],
    "contact": {
        "email": "john.doe@example.com",
        "phone": "123-456-7890"
    },
    "new_field": "some value"
}, null, 2);

const jsonDiffPatcher = create({
    objectHash: (obj: any, index: number) => obj.id || obj._id || '$$index:' + index,
});

export const useJsonDiff = () => {
    const [jsonLeft, setJsonLeft] = useState(exampleJson1);
    const [jsonRight, setJsonRight] = useState(exampleJson2);
    const [diffHtml, setDiffHtml] = useState<string | null>(null);

    const handleCompare = () => {
        let left, right;
        try {
            left = JSON.parse(jsonLeft);
        } catch (e) {
            toast({ title: i18n.t('toasts.common.error', 'Error'), description: i18n.t('tools.jsonDiff.invalidLeft', 'Invalid JSON in left panel.'), variant: 'destructive' });
            return;
        }

        try {
            right = JSON.parse(jsonRight);
        } catch (e) {
            toast({ title: i18n.t('toasts.common.error', 'Error'), description: i18n.t('tools.jsonDiff.invalidRight', 'Invalid JSON in right panel.'), variant: 'destructive' });
            return;
        }

        const delta = jsonDiffPatcher.diff(left, right);
        if (delta) {
            const html = formatHtml(delta, left);
            setDiffHtml(html);
        } else {
            setDiffHtml(`<div class="p-4 text-center text-green-600 font-semibold">${i18n.t('tools.jsonDiff.identical', 'JSON objects are identical.')}</div>`);
        }
        toast({ title: i18n.t('toasts.common.success', 'Success'), description: i18n.t('tools.jsonDiff.compared', 'JSON comparison complete.') });
    };

    const clearAll = () => {
        setJsonLeft('');
        setJsonRight('');
        setDiffHtml(null);
    };

    return {
        jsonLeft,
        setJsonLeft,
        jsonRight,
        setJsonRight,
        diffHtml,
        handleCompare,
        clearAll,
    };
};
