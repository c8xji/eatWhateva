import { useState } from "react"
import TagGroup from "./TagGroup"
import TagPicker from "./TagPicker"

const TagSection = ({ wantTags, setWantTags, avoidTags, setAvoidTags }) => {
  const [activePicker, setActivePicker] = useState(null) // 'want' | 'avoid' | null

  const togglePicker = (type) => {
    setActivePicker(activePicker === type ? null : type)
  }

  return (
    <div className="flex flex-col gap-2">
      <TagGroup title="想要" tags={wantTags} onAdd={() => togglePicker("want")} />
      {activePicker === "want" && (
        <TagPicker
          initialTags={wantTags}
          onConfirm={(tags) => {
            setWantTags(tags)
            setActivePicker(null)
          }}
        />
      )}

      <TagGroup title="不要" tags={avoidTags} onAdd={() => togglePicker("avoid")} />
      {activePicker === "avoid" && (
        <TagPicker
          initialTags={avoidTags}
          onConfirm={(tags) => {
            setAvoidTags(tags)
            setActivePicker(null)
          }}
        />
      )}
    </div>
  )
}

export default TagSection
