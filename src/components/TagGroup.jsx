import Tag from "./Tag"

const TagGroup = ({ title, tags, onAdd }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between border-b-4 border-slate-500 py-2 text-xl font-bold">
        <div>{title}</div>
        <button onClick={onAdd}>➕</button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <Tag key={tag} name={tag} selected={true} />
        ))}
      </div>
    </div>
  )
}

export default TagGroup
