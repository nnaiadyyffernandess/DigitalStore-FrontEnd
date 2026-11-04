import './FilterGroup.css'

function FilterGroup({ title, inputType = 'checkbox', name, options }) {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {options.map((option) => (
        <label key={option.value} className="filter-option">
          <input
            type={inputType}
            name={name}
            value={option.value}
            defaultChecked={option.checked}
          />
          {option.text}
        </label>
      ))}
    </div>
  )
}

export default FilterGroup