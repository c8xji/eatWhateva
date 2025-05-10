import { useState } from "react"
import foodList from "../data/foodList"
import { extractUniqueTags } from "../utils/extractUniqueTags"
import Tag from "./Tag"

const tagsByCategory = extractUniqueTags(foodList)

const TagPicker = ({ initialTags = [], onConfirm }) => {
  const [tempTags, setTempTags] = useState(initialTags)

  const handleToggle = (tag) => {
    setTempTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const renderTags = (category) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {tagsByCategory[category].map((tag) => (
        <Tag
          key={tag}
          name={tag}
          selected={tempTags.includes(tag)}
          onClick={() => handleToggle(tag)}
        />
      ))}
    </div>
  )

  return (
    <div className="w-full rounded-2xl shadow-lg flex flex-col p-4 bg-white mt-4">
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h3 className="text-xl font-semibold">風格</h3>
        {renderTags("style")}
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h3 className="text-xl font-semibold">種類</h3>
        {renderTags("type")}
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h3 className="text-xl font-semibold">價位</h3>
        {renderTags("price")}
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h3 className="text-xl font-semibold">口味</h3>
        {renderTags("flavor")}
      </div>
      <div>
        <h3 className="text-xl font-semibold">其他偏好</h3>
        {renderTags("preference")}
      </div>

      {/* 由父層控制關閉時觸發確認，可加入一個確認按鈕或由父層決定何時保存 */}
      <button
        className="mt-4 px-4 py-2 bg-yellow-300 rounded-lg"
        onClick={() => onConfirm(tempTags)}
      >
        確認選擇
      </button>
    </div>
  )
}

export default TagPicker
