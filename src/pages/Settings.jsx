import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Heart, Bell, Clock, Info, FileText, Lock, MessageCircle, ChevronRight, LogOut } from 'lucide-react'

function Settings() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState({
    push: true,
    morning: true,
    evening: true,
    reminder: false,
  })

  const [morningTime, setMorningTime] = useState('08:00')
  const [eveningTime, setEveningTime] = useState('20:00')
  const [userName, setUserName] = useState('사용자')
  const [userEmail, setUserEmail] = useState('user@example.com')

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleMenuClick = (label) => {
    switch (label) {
      case '프로필 설정':
        const newName = prompt('이름을 입력하세요', userName)
        if (newName) setUserName(newName)
        break
      case '건강 프로필':
        alert('건강 프로필 기능은 추후 구현 예정입니다')
        break
      case '앱 정보':
        alert('아임필굿 v1.0.0\n\n영양제 섭취 관리 앱\n개발: 2025')
        break
      case '이용약관':
        alert('이용약관 페이지로 이동합니다')
        break
      case '개인정보처리방침':
        alert('개인정보처리방침 페이지로 이동합니다')
        break
      case '문의하기':
        alert('문의하기: support@imfeelgood.com')
        break
      default:
        break
    }
  }

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      alert('로그아웃 되었습니다')
      navigate('/onboarding')
    }
  }

  const menuItems = [
    {
      category: '계정',
      items: [
        { label: '프로필 설정', Icon: User },
        { label: '건강 프로필', Icon: Heart },
      ],
    },
    {
      category: '기타',
      items: [
        { label: '앱 정보', Icon: Info },
        { label: '이용약관', Icon: FileText },
        { label: '개인정보처리방침', Icon: Lock },
        { label: '문의하기', Icon: MessageCircle },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">설정</h1>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={40} className="text-primary-600" strokeWidth={2} />
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            {userName}
          </h2>
          <p className="text-sm text-gray-500">{userEmail}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-500 mb-3 px-2 uppercase tracking-wide">
            알림
          </h3>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-gray-600" strokeWidth={2} />
                  <span className="text-gray-900 font-medium">푸시 알림</span>
                </div>
                <button
                  onClick={() => toggleNotification('push')}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notifications.push ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications.push ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-600" strokeWidth={2} />
                  <span className="text-gray-900 font-medium">아침 알림</span>
                </div>
                <button
                  onClick={() => toggleNotification('morning')}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notifications.morning ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications.morning ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              {notifications.morning && (
                <div className="mt-3 ml-8">
                  <input
                    type="time"
                    value={morningTime}
                    onChange={(e) => setMorningTime(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              )}
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-600" strokeWidth={2} />
                  <span className="text-gray-900 font-medium">저녁 알림</span>
                </div>
                <button
                  onClick={() => toggleNotification('evening')}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notifications.evening ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications.evening ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              {notifications.evening && (
                <div className="mt-3 ml-8">
                  <input
                    type="time"
                    value={eveningTime}
                    onChange={(e) => setEveningTime(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-gray-600" strokeWidth={2} />
                  <span className="text-gray-900 font-medium">복용 알림</span>
                </div>
                <button
                  onClick={() => toggleNotification('reminder')}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notifications.reminder ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications.reminder ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {menuItems.map((section) => (
          <div key={section.category}>
            <h3 className="text-sm font-bold text-gray-500 mb-3 px-2 uppercase tracking-wide">
              {section.category}
            </h3>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              {section.items.map((item, index) => {
                const Icon = item.Icon
                return (
                  <button
                    key={item.label}
                    onClick={() => handleMenuClick(item.label)}
                    className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors ${
                      index !== section.items.length - 1
                        ? 'border-b border-gray-100'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-gray-600" strokeWidth={2} />
                      <span className="text-gray-900 font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="w-full py-3 text-red-500 hover:text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <LogOut size={20} />
            로그아웃
          </button>
        </div>

        <div className="text-center text-sm text-gray-400 pb-8">
          <p>아임필굿 v1.0.0</p>
        </div>
      </div>
    </div>
  )
}

export default Settings
