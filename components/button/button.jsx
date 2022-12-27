function setSize() {}

function setColor() {}

function setVariant() {}

/**
 * Properties:
 * @label Button label
 * @color Text color
 * @variant Button Variant
 * @className Your custom class
 */
function Button(data) {
	let size = setSize(data.size);
	let color = setColor(data.color);
	let classList = `${size} ${color}`;
	return <button className={classList}>{data.label}</button>;
}

export default React.memo(Button);
