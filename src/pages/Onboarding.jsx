import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pill, ShieldAlert, Clock, Sparkles } from 'lucide-react'

function Onboarding() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: '영양제, 제대로 먹고 계신가요?',
      description: '여러 종류의 영양제를 복용하지만\n언제 어떻게 먹어야 할지 헷갈리셨나요?',
      Icon: Pill,
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      title: '영양제 간 상충 성분 자동 분석',
      description: '함께 먹으면 안 되는 조합을 자동으로 감지하고\n섭취 시간을 분리해드립니다',
      Icon: ShieldAlert,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      title: '최적 섭취 시간 추천',
      description: '각 영양제별로 가장 효과적인\n섭취 시간을 추천해드립니다',
      Icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: '시작하기',
      description: '지금 바로 첫 영양제를 등록하고\n맞춤 섭취 플랜을 받아보세요',
      Icon: Sparkles,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      localStorage.setItem('hasVisited', 'true')
      navigate('/home')
    }
  }

  const handleSkip = () => {
    localStorage.setItem('hasVisited', 'true')
    navigate('/home')
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white">
      <div className="flex justify-end p-4">
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleSkip}
            className="text-gray-500 text-sm hover:text-gray-700"
          >
            건너뛰기
          </button>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className={`w-32 h-32 ${steps[currentStep].bgColor} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
          {(() => {
            const Icon = steps[currentStep].Icon
            return <Icon size={64} className={steps[currentStep].color} strokeWidth={2} />
          })()}
        </div>
        <h1 className="text-2xl font-extrabold mb-4 text-gray-900 leading-tight">
          {steps[currentStep].title}
        </h1>
        <p className="text-gray-600 whitespace-pre-line leading-relaxed text-base">
          {steps[currentStep].description}
        </p>
      </div>

      <div className="p-8">
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'w-8 bg-emerald-600'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-primary-600 active:scale-98 transition-all shadow-lg"
        >
          {currentStep < steps.length - 1 ? '다음' : '시작하기'}
        </button>
      </div>
    </div>
  )
}

export default Onboarding
