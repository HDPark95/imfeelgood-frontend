import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ScanLine, Search, PenLine, Camera } from 'lucide-react'

function AddSupplement() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('barcode')
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    ingredients: '',
    dosage: '',
  })

  const tabs = [
    { id: 'barcode', label: '바코드 스캔', Icon: ScanLine },
    { id: 'search', label: '검색', Icon: Search },
    { id: 'manual', label: '직접 입력', Icon: PenLine },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert('제품명을 입력해주세요')
      return
    }
    // TODO: 백엔드 API 연동 시 여기에 POST 요청 추가
    alert('영양제가 등록되었습니다!')
    navigate('/supplements')
  }

  const handleCameraStart = () => {
    // TODO: 카메라 기능 구현
    alert('카메라 기능은 추후 구현 예정입니다')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">영양제 추가</h1>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.Icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-center transition-all ${
                  activeTab === tab.id
                    ? 'text-primary-500 border-b-2 border-primary-500 font-semibold'
                    : 'text-gray-500'
                }`}
              >
                <Icon size={20} className="inline mr-2" strokeWidth={2.5} />
                <span className="text-sm">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'barcode' && (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">
            <div className="w-64 h-64 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-6 border-2 border-dashed border-gray-300">
              <Camera size={80} className="text-gray-400" strokeWidth={1.5} />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              바코드를 스캔하세요
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              영양제 뒷면의 바코드를 카메라에 비춰주세요
            </p>
            <button
              onClick={handleCameraStart}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-primary-600 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Camera size={20} />
              카메라 시작
            </button>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="제품명을 입력하세요"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 mb-3">
                최근 검색
              </h3>
              <div className="space-y-2">
                {['비타민D', '오메가3', '프로바이오틱스'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                    <button className="text-gray-400 hover:text-gray-600 text-xl">×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manual' && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-100">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                제품명
              </label>
              <input
                type="text"
                placeholder="영양제 이름을 입력하세요"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                제조사 (선택)
              </label>
              <input
                type="text"
                placeholder="제조사명"
                value={formData.manufacturer}
                onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                주요 성분 (선택)
              </label>
              <input
                type="text"
                placeholder="예: 비타민D, 칼슘"
                value={formData.ingredients}
                onChange={(e) => handleInputChange('ingredients', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                용법/용량
              </label>
              <input
                type="text"
                placeholder="예: 1일 1회, 1정"
                value={formData.dosage}
                onChange={(e) => handleInputChange('dosage', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-primary-600 active:scale-98 transition-all shadow-md mt-6"
            >
              등록하기
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddSupplement
