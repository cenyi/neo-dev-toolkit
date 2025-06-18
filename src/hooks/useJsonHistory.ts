
import { useState, useEffect } from 'react';

export interface JsonHistoryItem {
  id: string;
  content: string;
  timestamp: number;
  preview: string; // 用于显示的预览文本
}

const STORAGE_KEY = 'json-tool-history';
const MAX_HISTORY_ITEMS = 50; // 最多保存50条记录

export const useJsonHistory = () => {
  const [history, setHistory] = useState<JsonHistoryItem[]>([]);

  // 从localStorage加载历史记录
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedHistory = JSON.parse(stored);
        setHistory(parsedHistory);
      }
    } catch (error) {
      console.warn('Failed to load JSON history from localStorage:', error);
    }
  }, []);

  // 保存历史记录到localStorage
  const saveToStorage = (newHistory: JsonHistoryItem[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    } catch (error) {
      console.warn('Failed to save JSON history to localStorage:', error);
    }
  };

  // 添加新的JSON到历史记录
  const addToHistory = (jsonContent: string) => {
    if (!jsonContent.trim()) return;

    try {
      // 验证是否为有效JSON
      JSON.parse(jsonContent);
      
      // 生成预览文本（最多100个字符）
      const preview = jsonContent.length > 100 
        ? jsonContent.substring(0, 97) + '...' 
        : jsonContent;

      const newItem: JsonHistoryItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        content: jsonContent,
        timestamp: Date.now(),
        preview: preview.replace(/\s+/g, ' ').trim()
      };

      setHistory(prevHistory => {
        // 检查是否已存在相同内容
        const existingIndex = prevHistory.findIndex(item => item.content === jsonContent);
        let newHistory: JsonHistoryItem[];

        if (existingIndex !== -1) {
          // 如果已存在，更新时间戳并移到最前面
          const updatedItem = { ...prevHistory[existingIndex], timestamp: Date.now() };
          newHistory = [updatedItem, ...prevHistory.filter((_, index) => index !== existingIndex)];
        } else {
          // 添加新项目到最前面
          newHistory = [newItem, ...prevHistory];
        }

        // 限制历史记录数量
        if (newHistory.length > MAX_HISTORY_ITEMS) {
          newHistory = newHistory.slice(0, MAX_HISTORY_ITEMS);
        }

        saveToStorage(newHistory);
        return newHistory;
      });
    } catch (error) {
      // 如果不是有效JSON，不添加到历史记录
      console.warn('Invalid JSON, not adding to history');
    }
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
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory
  };
};
