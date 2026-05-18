function SearchFilter({ setDepartment }) {
  return (
    <input
      type="text"
      placeholder="Search Department"
      onChange={(e) =>
        setDepartment(e.target.value)
      }
    />
  );
}

export default SearchFilter;