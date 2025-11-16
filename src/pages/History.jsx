import { useState } from 'react'

function History() {
  const [activeTab, setActiveTab] = useState('weekly')

  const weeklyData = [
    { day: '월', completed: true },
    { day: '화', completed: true },
    { day: '수', completed: false },
    { day: '목', completed: true },
    { day: '금', completed: true },
    { day: '토', completed: false },
    { day: '일', completed: true },
  ]

  const monthlyData = [
    { week: '1주', rate: 85 },
    { week: '2주', rate: 72 },
    { week: '3주', rate: 90 },
    { week: '4주', rate: 75 },
  ]

  const weeklyAchievementRate = 75
  const monthlyAchievementRate = 80

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">섭취 기록</h1>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('weekly')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'weekly'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            주간
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'monthly'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            월간
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {activeTab === 'weekly' ? (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {weeklyAchievementRate}%
              </div>
              <p className="text-sm text-gray-600">이번 주 달성률</p>
            </div>

            <div className="flex justify-around mb-4">
              {weeklyData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      item.completed
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {item.completed ? '✓' : '○'}
                  </div>
                  <span className="text-xs text-gray-600">{item.day}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">연속 달성일</span>
                <span className="font-semibold text-gray-900">3일</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">총 섭취 횟수</span>
                <span className="font-semibold text-gray-900">21회</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {monthlyAchievementRate}%
              </div>
              <p className="text-sm text-gray-600">이번 달 달성률</p>
            </div>

            <div className="space-y-4 mb-4">
              {monthlyData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">{item.week}</span>
                    <span className="text-primary-500 font-semibold">{item.rate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-emerald-600 h-2.5 rounded-full transition-all"
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">이번 달 총 섭취일</span>
                <span className="font-semibold text-gray-900">24일</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">총 섭취 횟수</span>
                <span className="font-semibold text-gray-900">89회</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            영양제별 통계
          </h2>
          <div className="space-y-4">
            {[
              { name: '비타민B 복합체', rate: 85 },
              { name: '종합비타민', rate: 71 },
              { name: '오메가3', rate: 66 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-primary-500 font-semibold">
                    {item.rate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all"
                    style={{ width: `${item.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
