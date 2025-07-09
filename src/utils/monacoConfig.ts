import { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

// 配置Monaco Editor使用本地资源而不是CDN
export const configureMonaco = () => {
  // 设置Monaco Editor使用本地打包的资源
  loader.config({ monaco });
  
  // 设置语言配置
  loader.config({
    'vs/nls': {
      availableLanguages: {
        '*': 'en'
      }
    }
  });
  
  console.log('Monaco Editor configured to use local resources');
};

// 预加载Monaco Editor以避免首次使用时的延迟
export const preloadMonaco = async () => {
  try {
    await loader.init();
    console.log('Monaco Editor preloaded successfully');
  } catch (error) {
    console.warn('Monaco Editor preload failed, will fallback to textarea:', error);
  }
};