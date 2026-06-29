import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Megaphone, ShoppingCart, Plug, Settings, X, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/campaigns', icon: Megaphone, label: 'Campanhas' },
  { to: '/sales', icon: ShoppingCart, label: 'Vendas' },
  { to: '/integrations', icon: Plug, label: 'Integrações' },
  { to: '/settings', icon: Settings, label: 'Configurações' },
]

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/70 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-30 h-full w-64 bg-[#0A1C0E] border-r border-[#222222] flex flex-col transition-transform duration-300',
          'lg:translate-x-0 lg:static lg:z-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#222222]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C8FF00] to-[#2D7A30] flex items-center justify-center shadow-lg shadow-[#C8FF00]/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#F0F0F0] font-bold text-sm leading-tight">Restart</p>
              <p className="text-[#888888] text-xs">Intestinal · Ads</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-[#888888] hover:text-[#F0F0F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => { if (window.innerWidth < 1024) onClose() }}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30'
                    : 'text-[#888888] hover:text-[#F0F0F0] hover:bg-[#1A1A1A]'
                )
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#222222]">
          <div className="bg-[#0D0D0D] rounded-lg p-3 text-xs text-[#888888]">
            <p className="font-semibold text-[#C8FF00] mb-0.5">Restart Intestinal</p>
            <p>Painel de Rastreamento</p>
          </div>
        </div>
      </aside>
    </>
  )
}
