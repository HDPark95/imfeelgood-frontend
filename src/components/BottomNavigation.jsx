import { NavLink } from 'react-router-dom'
import { Home, Pill, Plus, BarChart3, Settings } from 'lucide-react'

function BottomNavigation() {
  const navItems = [
    { path: '/home', label: '홈', Icon: Home },
    { path: '/supplements', label: '영양제', Icon: Pill },
    { path: '/add-supplement', label: '추가', Icon: Plus },
    { path: '/history', label: '기록', Icon: BarChart3 },
    { path: '/settings', label: '설정', Icon: Settings },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const { Icon } = item
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? 'text-primary-500' : 'text-gray-400'
                }`
              }
            >
              <Icon size={24} className="mb-1" strokeWidth={2} />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavigation
