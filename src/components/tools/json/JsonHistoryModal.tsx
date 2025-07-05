
import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { History, Trash2, Clock, Copy, Search } from 'lucide-react';
import { JsonHistoryItem } from '@/hooks/json/useJsonHistory';
import { toast } from '@/hooks/use-toast';

interface JsonHistoryModalProps {
  history: JsonHistoryItem[];
  onSelectHistory: (content: string) => void;
  onRemoveItem: (id: string) => void;
  onClearHistory: () => void;
}

const JsonHistoryModal: React.FC<JsonHistoryModalProps> = ({
  history,
  onSelectHistory,
  onRemoveItem,
  onClearHistory,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // 筛选历史记录
  const filteredHistory = useMemo(() => {
    if (!searchQuery.trim()) return history;
    
    return history.filter(item => 
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [history, searchQuery]);

  const handleSelectItem = (content: string) => {
    onSelectHistory(content);
    setOpen(false);
    toast({
      title: t('toasts.common.success'),
      description: t('tools.json.history.loadedFromHistory'),
    });
  };

  const handleCopyItem = (content: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    toast({
      title: t('toasts.common.success'),
      description: t('toasts.success.copied'),
    });
  };

  const handleRemoveItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onRemoveItem(id);
    toast({
      title: t('toasts.common.success'),
      description: t('tools.json.history.itemRemoved'),
    });
  };

  const handleClearAll = () => {
    onClearHistory();
    setSearchQuery('');
    toast({
      title: t('toasts.common.success'),
      description: t('tools.json.history.historyCleared'),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-sm font-extrabold">
          <History className="w-4 h-4 mr-1" />
          {t('tools.json.history.title')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <History className="w-5 h-5" />
              {t('tools.json.history.title')}
              {history.length > 0 && (
                <span className="text-sm text-muted-foreground">
                  ({history.length}/50)
                </span>
              )}
            </span>
            {history.length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearAll}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                {t('tools.json.history.clearAll')}
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>
        
        {history.length > 0 && (
          <div className="flex items-center space-x-2 mt-4">
            <Search className="w-4 h-4" />
            <Input
              placeholder={t('tools.json.history.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>
        )}
        
        <ScrollArea className="flex-1 mt-4">
          {history.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>{t('tools.json.history.emptyMessage')}</p>
            </div>
          ) : filteredHistory.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>{t('tools.json.history.noResults')}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredHistory.map((item) => (
                <Card
                  key={item.id}
                  className="cursor-pointer hover:bg-accent/50 transition-colors"
                  onClick={() => handleSelectItem(item.content)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {formatDate(item.timestamp)}
                          </span>
                        </div>
                        <pre className="text-sm bg-muted/30 p-2 rounded text-foreground font-mono overflow-hidden">
                          {item.preview}
                        </pre>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleCopyItem(item.content, e)}
                          title={t('common.copy')}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleRemoveItem(item.id, e)}
                          title={t('tools.json.history.removeItem')}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default JsonHistoryModal;
