export default function Header(props) {
  const { toggleCv, showCv } = props;

  return (
    <div id="headerDiv">
      <button className="headerBtn"
        onClick={toggleCv}
      >
        {showCv ? 'Edit CV' : 'Show CV'}
      </button>
    </div>
  )
}