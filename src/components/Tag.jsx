const Tag = ({ name, selected, onClick }) => {
    return (
      <div
        className={`cursor-pointer px-3 py-1 rounded-2xl text-sm ${
          selected ? 'bg-yellow-400' : 'bg-gray-300'
        }`}
        onClick={onClick}
      >
        {name}
      </div>
    )
  }
  
export default Tag