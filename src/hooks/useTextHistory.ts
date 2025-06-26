
import { useState, useEffect } from 'react';

export interface TextHistoryItem {
  id: string;
  content: string;
  timestamp: number;
  preview: string;
}

export const useTextHistory = (storageKey: string, maxItems: number = 20) => {
  const [history, setHistory] = useState<TextHistoryItem[]>([]);

  // 从localStorage加载历史记录
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsedHistory = JSON.parse(stored);
        setHistory(parsedHistory);
      }
    } catch (error) {
      console.warn(`Failed to load history from localStorage (${storageKey}):`, error);
    }
  }, [storageKey]);

  // 保存历史记录到localStorage
  const saveToStorage = (newHistory: TextHistoryItem[]) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(newHistory));
    } catch (error) {
      console.warn(`Failed to save history to localStorage (${storageKey}):`, error);
    }
  };

  // 添加新的文本到历史记录
  const addToHistory = (textContent: string) => {
    if (!textContent.trim()) return;

    // 生成预览文本（最多100个字符）
    const preview = textContent.length > 100 
      ? textContent.substring(0, 97) + '...' 
      : textContent;

    const newItem: TextHistoryItem = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: textContent,
      timestamp: Date.now(),
      preview: preview.replace(/\s+/g, ' ').trim()
    };

    setHistory(prevHistory => {
      // 检查是否已存在相同内容
      const existingIndex = prevHistory.findIndex(item => item.content === textContent);
      let newHistory: TextHistoryItem[];

      if (existingIndex !== -1) {
        // 如果已存在，更新时间戳并移到最前面
        const updatedItem = { ...prevHistory[existingIndex], timestamp: Date.now() };
        newHistory = [updatedItem, ...prevHistory.filter((_, index) => index !== existingIndex)];
      } else {
        // 添加新项目到最前面
        newHistory = [newItem, ...prevHistory];
      }

      // 限制历史记录数量
      if (newHistory.length > maxItems) {
        newHistory = newHistory.slice(0, maxItems);
      }

      saveToStorage(newHistory);
      return newHistory;
    });
  };

  // 删除历史记录项
  const removeFromHistory = (id: string) => {
    setHistory(prevHistory => {
      const newHistory = prevHistory.filter(item => item.id !== id);
      saveToStorage(newHistory);
      return newHistory;
    });
  };

  // 清空所有历史记录
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(storageKey);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory
  };
};
