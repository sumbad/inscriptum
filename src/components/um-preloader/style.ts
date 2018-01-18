
export default (html, model) => html`
<style>
${`
  .um-preloader {
    position: relative;
  }

  .um-preloader__loader {
    position: relative;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    transition: opacity 0.5s ease, height 0.2s ease;
    background-color: rgba(255, 255, 255, 0.7);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;   
  }
  `
}
</style>
`;