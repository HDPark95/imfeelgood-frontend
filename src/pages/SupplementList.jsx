import { useNavigate } from 'react-router-dom'
import { Pill, Sunrise, Sunset, Info, Plus } from 'lucide-react'

function SupplementList() {
  const navigate = useNavigate()

  const timeIcons = {
    아침: Sunrise,
    저녁: Sunset,
  }

  const supplements = [
    {
      id: 1,
      name: '비타민B 복합체',
      manufacturer: '종근당',
      timeOfDay: '아침',
      lastTaken: '오늘',
    },
    {
      id: 2,
      name: '종합비타민',
      manufacturer: '센트룸',
      timeOfDay: '아침',
      lastTaken: '오늘',
    },
    {
      id: 3,
      name: '오메가3',
      manufacturer: '뉴트리원',
      timeOfDay: '저녁',
      lastTaken: '1일 전',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">나의 영양제</h1>
        <p className="text-sm text-gray-500 mt-1">
          전체 {supplements.length}개
        </p>
      </div>

      <div className="p-4 space-y-3">
        {supplements.map((supplement) => {
          const TimeIcon = timeIcons[supplement.timeOfDay]
          return (
            <div
              key={supplement.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all cursor-pointer border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Pill size={32} className="text-primary-500" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">
                    {supplement.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {supplement.manufacturer}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <TimeIcon size={16} strokeWidth={2.5} />
                      {supplement.timeOfDay}
                    </span>
                    <span className="text-sm text-gray-400">
                      최근 섭취: {supplement.lastTaken}
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-primary-500 transition-colors p-1">
                  <Info size={20} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="fixed bottom-20 right-4 max-w-md mx-auto">
        <button
          onClick={() => navigate('/add-supplement')}
          style={{ backgroundColor: '#059669' }}
          className="w-14 h-14 text-white rounded-full shadow-lg hover:opacity-90 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        >
          <Plus size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}

export default SupplementList
