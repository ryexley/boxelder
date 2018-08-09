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

### Custom Color

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
