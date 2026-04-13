'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  type TabsProps,
} from '@/components/animate-ui/primitives/animate/tabs';
import { CopyButton } from '@/components/animate-ui/components/buttons/copy';

type CodeTabsProps = {
  codes: Record<string, string>;
  lang?: string;
  themes?: { light: string; dark: string };
  copyButton?: boolean;
  onCopiedChange?: (copied: boolean, content?: string) => void;
} & Omit<TabsProps, 'children'>;

function CodeTabs({
  codes,
  className,
  defaultValue,
  value,
  onValueChange,
  copyButton = true,
  onCopiedChange,
  ...props
}: CodeTabsProps) {
  const codeKeys = React.useMemo(() => Object.keys(codes), [codes]);
  const [selectedCode, setSelectedCode] = React.useState<string>(
    value ?? defaultValue ?? codeKeys[0] ?? '',
  );
  const [typedCode, setTypedCode] = React.useState('');
  const activeCode = codes[selectedCode] ?? '';
  const isTyping = typedCode.length < activeCode.length;

  React.useEffect(() => {
    if (!activeCode) {
      setTypedCode('');
      return;
    }

    let index = 0;
    setTypedCode('');
    const timer = window.setInterval(() => {
      index += 1;
      setTypedCode(activeCode.slice(0, index));
      if (index >= activeCode.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [selectedCode, activeCode]);

  return (
    <Tabs
      data-slot="install-tabs"
      className={cn(
        'w-full gap-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 text-zinc-100',
        className,
      )}
      {...props}
      value={selectedCode}
      onValueChange={(val) => {
        setSelectedCode(val);
        onValueChange?.(val);
      }}
    >
      <TabsHighlight className="absolute z-0 inset-0 rounded-none shadow-none bg-transparent after:content-[''] after:absolute after:inset-x-0 after:h-0.5 after:bottom-0 dark:after:bg-white after:bg-black after:rounded-t-full">
        <TabsList
          data-slot="install-tabs-list"
          className="relative flex h-12 w-full items-center justify-between rounded-none border-b border-white/10 bg-zinc-900/90 px-5 py-0 text-zinc-100"
        >
          <div className="flex h-full gap-x-4">
            {codeKeys.map((code) => (
              <TabsHighlightItem
                key={code}
                value={code}
                className="flex items-center justify-center"
              >
                <TabsTrigger
                  key={code}
                  value={code}
                  className="h-full px-0 text-base font-semibold text-zinc-400 data-[state=active]:text-yellow-300"
                >
                  {code}
                </TabsTrigger>
              </TabsHighlightItem>
            ))}
          </div>

          {copyButton && selectedCode && (
            <CopyButton
              content={codes[selectedCode]}
              size="xs"
              variant="ghost"
              className="-me-2.5 bg-transparent text-zinc-300 hover:bg-white/10"
              onCopiedChange={onCopiedChange}
            />
          )}
        </TabsList>
      </TabsHighlight>

      <TabsContents data-slot="install-tabs-contents">
        {Object.entries(codes).map(([code, val]) => {
          const visibleCode = code === selectedCode ? typedCode : val;
          return (
            <TabsContent
              data-slot="install-tabs-content"
              key={code}
              className="w-full"
              value={code}
            >
              <pre className="min-h-[420px] w-full overflow-auto bg-zinc-950 p-7 text-base leading-7 text-zinc-100">
                <code className="whitespace-pre-wrap break-words font-mono">
                  {visibleCode}
                  {code === selectedCode && isTyping && (
                    <span className="ml-0.5 inline-block h-5 w-2 animate-pulse bg-yellow-300 align-middle" />
                  )}
                </code>
              </pre>
            </TabsContent>
          );
        })}
      </TabsContents>
    </Tabs>
  );
}

export { CodeTabs, type CodeTabsProps };
