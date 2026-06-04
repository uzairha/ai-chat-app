import './LoadingIndicator.css'

function LoadingIndicator() {
  return (
    <div className="loading-wrapper">
      <span className="loading-label">AI</span>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default LoadingIndicator
