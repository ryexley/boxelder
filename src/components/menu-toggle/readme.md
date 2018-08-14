### Basic Usage

```
const size = "3rem";
const containerStyle = {
  height: `${size}`,
  position: "relative",
  width: `${size}`
};

<div style={containerStyle}>
  <MenuToggle
    color="#ccc"
    onToggle={ ({ active }) => console.log(`Toggled: ${ active ? "active" : "not active" }`) } />
</div>
```

### Custom `color`

```
const size = "3rem";
const containerStyle = {
  height: `${size}`,
  position: "relative",
  width: `${size}`
};

<div style={containerStyle}>
  <MenuToggle
    color="linear-gradient(135deg, #0cf, #09f)"
    onToggle={ ({ active }) => console.log(`Toggled: ${ active ? "active" : "not active" }`) } />
</div>
```

### Custom `activeColor`

```
const size = "3rem";
const containerStyle = {
  height: `${size}`,
  position: "relative",
  width: `${size}`
};

<div style={containerStyle}>
  <MenuToggle
    color="linear-gradient(135deg, #3c0, #9f0)"
    activeColor="linear-gradient(135deg, #999, #222)"
    onToggle={ ({ active }) => console.log(`Toggled: ${ active ? "active" : "not active" }`) } />
</div>
```
