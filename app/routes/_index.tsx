import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';

export const meta: MetaFunction = () => {
  return [{ title: 'UnQCoder' }, { name: 'description', content: 'Your AI-powered coding partner' }];
};

export const loader = () => json({});

/**
 * Landing page component for UnQCoder
 * Note: Settings functionality should ONLY be accessed through the sidebar menu.
 */
export default function Index() {
  return (
    <div className="flex flex-col h-full w-full bg-[var(--main-background)]">
      <BackgroundRays />
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}
