import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, Sunrise, Sunset, Info, Plus } from 'lucide-react'

function Home() {
  const navigate = useNavigate()

  const timeIcons = {
    아침: Sunrise,
    저녁: Sunset,
  }

  const [supplements, setSupplements] = useState([
    {
      id: 1,
      timeOfDay: '아침',
      items: [
        { name: '비타민B 복합체', dosage: '1정', checked: false },
        { name: '종합비타민', dosage: '1정', checked: false },
        { name: '프로바이오틱스', dosage: '1캡슐', checked: false },
      ],
    },
    {
      id: 2,
      timeOfDay: '저녁',
      items: [
        { name: '오메가3', dosage: '1캡슐', checked: false },
        { name: '마그네슘', dosage: '2정', checked: false },
      ],
    },
  ])

  // Calculate completion rate dynamically
  const completionRate = useMemo(() => {
    const totalItems = supplements.reduce((sum, timeSlot) => sum + timeSlot.items.length, 0)
    const checkedItems = supplements.reduce(
      (sum, timeSlot) => sum + timeSlot.items.filter((item) => item.checked).length,
      0
    )
    return totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0
  }, [supplements])

  // Toggle checkbox handler
  const handleToggleCheck = (timeSlotId, itemIndex) => {
    setSupplements((prev) =>
      prev.map((timeSlot) =>
        timeSlot.id === timeSlotId
          ? {
              ...timeSlot,
              items: timeSlot.items.map((item, idx) =>
                idx === itemIndex ? { ...item, checked: !item.checked } : item
              ),
            }
          : timeSlot
      )
    )
  }
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div style={{ backgroundColor: '#059669' }} className="text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">오늘의 섭취 플랜</h1>
          <button className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors">
            <Bell size={20} />
          </button>
        </div>
        <p className="text-sm text-white opacity-90 mb-4">{today}</p>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">전체 달성률</span>
            <span className="text-2xl font-bold text-emerald-600">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-emerald-600 h-2.5 rounded-full transition-all shadow-sm"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {supplements.map((timeSlot) => {
          const TimeIcon = timeIcons[timeSlot.timeOfDay]
          return (
            <div key={timeSlot.id} className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <TimeIcon size={20} className="text-primary-600" strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  {timeSlot.timeOfDay}
                </h2>
                <span className="ml-auto text-sm font-semibold text-gray-600">
                  {timeSlot.items.filter((item) => item.checked).length}/
                  {timeSlot.items.length}
                </span>
              </div>

              <div className="space-y-2">
                {timeSlot.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-200"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleToggleCheck(timeSlot.id, index)}
                      className="w-5 h-5 text-primary-500 rounded border-gray-300 focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.dosage}</p>
                    </div>
                    <button className="text-gray-400 hover:text-primary-500 transition-colors p-1">
                      <Info size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <button
          onClick={() => navigate('/add-supplement')}
          style={{ backgroundColor: '#059669' }}
          className="w-full text-white py-4 rounded-xl font-bold hover:opacity-90 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
        >
          <Plus size={20} strokeWidth={3} />
          영양제 추가하기
        </button>
      </div>
    </div>
  )
}

export default Home
