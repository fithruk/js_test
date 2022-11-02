const arenaElem = document.querySelector(".arena");

const generateNumbersRange = (length) => {
  return [...new Array(length)].fill(1).map((num, ind) => num + ind);
};

const getLineSeats = () => {
  return generateNumbersRange(10)
    .map(
      (seatNumber) => `
        <div 
            class="sector__seat" 
            data-seat-number="${seatNumber}"
        ></div>
        `
    )
    .join("");
};

const getSectorLines = () => {
  return generateNumbersRange(10)
    .map(
      (lineNumber) => `
      <div 
          class="sector__line" 
          data-line-number="${lineNumber}"
      >${getLineSeats()}</div>
      `
    )
    .join("");
};

const onSeatSelect = (e) => {
  const isSeat = e.target.closest(".sector__seat");

  if (!isSeat) {
    return;
  }

  const seatNumber = e.target.dataset.seatNumber;
  const lineNumber = e.target.closest(".sector__line").dataset.lineNumber;
  const sectorNumber = e.target.closest(".sector").dataset.sectorNumber;

  const selectedSeatElem = document.querySelector(".board__selected-seat");
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

const renderArena = () => {
  const sectorsString = generateNumbersRange(3)
    .map(
      (sectorNumber) => `
    <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
    >${getSectorLines()}</div>
    `
    )
    .join("");

  arenaElem.innerHTML = sectorsString;
};

arenaElem.addEventListener("click", onSeatSelect);

renderArena();
