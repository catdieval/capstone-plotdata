export default function BarPlot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      width="200"
      height="200"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="m8 92v-82h4v78h78v4z" fill-rule="nonzero" />
        <path d="m18 54h18v30h-18z" />
        <path d="m42 26h18v58h-18z" />
        <path d="m66 40h18v44h-18z" />
      </g>
      {/* <text
        x="0"
        y="115"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by joris sewandono
      </text>
      <text
        x="0"
        y="120"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text> */}
    </svg>
  );
}
