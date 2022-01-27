const clearContainers = () => {
    const containers = Array.from(document.querySelectorAll(".container"));
    containers.forEach((container) => {
      container.removeChild(container.lastChild);
      container.classList.remove("visible");
    });
  };

  export default clearContainers;