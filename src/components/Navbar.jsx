import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-sky-200 px-4 py-3 flex justify-between items-center text-lg h-16">
      <Link to="/" className="w-1/2 text-2xl font-bold">🍱 要吃什麼？</Link>
      <div className="flex justify-around w-1/2 text-lg font-bold gap-1">
        <Link to="/history">📝記錄</Link>
        <Link to="/favorites">💛收藏</Link>
        <Link to="/settings">⚙️設定</Link>
      </div>
    </div>
  )
}

export default Navbar
