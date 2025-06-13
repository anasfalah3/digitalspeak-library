import "@/app/components/CodePlaceholder.css";
const CodePlaceholder = () => {
  return (
    <code className="code-container">
      <input title="sig" className="sig" defaultValue="// Jane 💜" />
      <div className="glow-container">
        <div className="augs" data-augmented-ui="" />
      </div>
      <section className="augs bg" data-augmented-ui="">
        <button
          className="dots"
          //   onclick="changeMode(this)"
          title="(click to change) Current Mode: css"
        />
        <input title="title" className="title" defaultValue="propjockey.io" />
        <div className="code highcontrast-dark">
          <textarea
            className="w-full h-full"
            title="text area"
            id="code"
            defaultValue={`
              @keyframes cast-bit-to-space-toggle {
  to { --space-toggle: ; }
}

:where(.cbtst) {
  --cbtst-animation: cast-bit-to-space-toggle
    1ms linear both var(--bit, 0);
  animation: var(--cbtst-animation);
}

/* usage */
.my-el.cbtst {
  --bit: 1; /* provide input value of 0 or 1 */
  /* var(--space-toggle) is the output */
  
  --bg: var(--space-toggle) lime;
  background: var(--bg, red);
  /* 1 = lime, 0 = red */
}
              `}
          />
        </div>
      </section>
    </code>
  );
};
export default CodePlaceholder;
