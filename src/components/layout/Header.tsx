'use client';

import { LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useLogout } from '@/hooks/use-logout';
import { decodeJwt } from '@/lib/jwt';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store';

interface JwtPayload {
  userId: string | number;
  email?: string;
  name?: string;
  roleName?: string;
}

const navLinks = [
  { name: 'Trang chủ', href: '/' },
  // Thêm nav links tại đây
];

export function Header({ initialAccessToken }: { initialAccessToken?: string }) {
  const pathname = usePathname();
  const { accessToken: storeToken, user: storeUser } = useAuthStore();
  const { logout: handleLogout, isLoggingOut } = useLogout();

  const accessToken = storeToken || initialAccessToken;

  const user =
    storeUser ||
    (() => {
      if (!initialAccessToken) return null;
      const decoded = decodeJwt<JwtPayload>(initialAccessToken);
      if (!decoded) return null;
      return {
        id: String(decoded.userId),
        username: decoded.email ?? '',
        name: decoded.name,
        role: decoded.roleName,
        avatar: undefined as string | undefined,
      };
    })();

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-black tracking-tight text-foreground">
            {/* Thay bằng logo/tên dự án */}
            BaseApp
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 relative py-1',
                    isActive
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
                      : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {accessToken && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full p-0 hover:scale-105 active:scale-95 transition-all duration-300 hover:ring-2 hover:ring-primary/30"
                >
                  <Avatar className="h-10 w-10 border border-border">
                    {user.avatar && <AvatarImage src={user.avatar} alt="Avatar" />}
                    <AvatarFallback
                      className="font-bold text-base"
                      style={{ backgroundColor: '#7C4DFF', color: '#fff' }}
                    >
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[260px] rounded-[24px] border border-border bg-card/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl z-[100]"
              >
                <div className="flex flex-col px-3 py-2 pb-3 border-b border-border">
                  <span className="text-[15px] font-bold text-foreground leading-tight">
                    {user.name || 'Người dùng'}
                  </span>
                  <span className="text-xs text-muted-foreground truncate mt-1">
                    {user.username}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-3">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-[14px] text-sm font-medium text-foreground/80 hover:bg-muted dark:hover:bg-white/5 hover:text-foreground transition-all duration-200 cursor-pointer"
                    >
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>Hồ sơ</span>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="my-2 bg-border" />
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full justify-start gap-3 px-3 py-2.5 h-auto rounded-[14px] text-sm font-medium text-destructive hover:bg-destructive/10 hover:text-destructive transition-all duration-200 disabled:opacity-60"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{isLoggingOut ? 'Đang đăng xuất...' : 'Đăng xuất'}</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="border border-input text-foreground/70 hover:text-foreground">
                <Link href="/register">Đăng ký</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-[14px] px-5">
                <Link href="/login">Đăng nhập</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
