/* eslint-disable max-len */

const getViewBox = (name: string) => {
  switch (name) {
    default:
      return "0 0 24 24";
  }
};

const getPath = (name: string, props: any) => {
  const {
    fill,
    // , stroke, stopColor, iconprimary
  } = props;
  switch (name) {
    case "check-out-icon":
      return (
        <>
          <path
            stroke="#FF9F0A"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="M9.918 6.454V2.887c0-.493-.399-.892-.891-.892H4.27c-.492 0-.892.4-.892.892v7.134c0 .493.4.892.892.892h4.46"
            style={{
              stroke: "#ff9f0a",
              stroke: "color(display-p3 1 .6235 .0392)",
              strokeOpacity: 1,
            }}
          />
          <path
            stroke="#FF9F0A"
            strokeWidth={1.189}
            d="M7.54 1.995V7.94"
            style={{
              stroke: "#ff9f0a",
              stroke: "color(display-p3 1 .6235 .0392)",
              strokeOpacity: 1,
            }}
          />
          <path
            stroke="#FF9F0A"
            strokeLinecap="round"
            strokeWidth={1.189}
            d="M5.46 4.373v.496"
            style={{
              stroke: "#ff9f0a",
              stroke: "color(display-p3 1 .6235 .0392)",
              strokeOpacity: 1,
            }}
          />
          <path
            stroke="#FF9F0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="M9.026 12.697v-1.19L7.324 9.077a.787.787 0 0 1 .088-1.008v0a.787.787 0 0 1 .947-.127l1.56.891V4.076l1.078.96a4.757 4.757 0 0 1 1.597 3.554v4.107"
            style={{
              stroke: "#ff9f0a",
              stroke: "color(display-p3 1 .6235 .0392)",
              strokeOpacity: 1,
            }}
          />
        </>
      );

    case "visitor-icon":
      return (
        <>
          <path
            stroke="#5654D4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="M13.005 7.346c-.745-2.418-2.859-4.162-5.35-4.162-2.492 0-4.606 1.744-5.352 4.162.624 2.022 2.204 3.573 4.162 4.026"
            style={{
              stroke: "#5654d4",
              stroke: "color(display-p3 .3373 .3294 .8314)",
              strokeOpacity: 1,
            }}
          />
          <circle
            cx={7.654}
            cy={7.346}
            r={1.486}
            stroke="#5654D4"
            strokeLinejoin="round"
            strokeWidth={1.189}
            style={{
              stroke: "#5654d4",
              stroke: "color(display-p3 .3373 .3294 .8314)",
              strokeOpacity: 1,
            }}
          />
          <path
            stroke="#5654D4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="m8.546 11.21 1.487 1.487 2.972-2.973"
            style={{
              stroke: "#5654d4",
              stroke: "color(display-p3 .3373 .3294 .8314)",
              strokeOpacity: 1,
            }}
          />
        </>
      );
    case "chart-icon":
      return (
        <>
          <path
            stroke="#1DBF73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="m6.58 3.481 1.188 1.487 2.379-2.378M3.607 3.779h.892m0 4.459h6.064c.49 0 .929-.3 1.107-.756l1.132-2.892a.595.595 0 0 0-.554-.811h-.615"
            style={{
              stroke: "#1dbf73",
              stroke: "color(display-p3 .1137 .749 .451)",
              strokeOpacity: 1,
            }}
          />
          <path
            stroke="#1DBF73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.189}
            d="M2.12 1.995h.158a1.19 1.19 0 0 1 1.177 1.02l.898 6.283a1.19 1.19 0 0 0 1.177 1.02h5.211"
            style={{
              stroke: "#1dbf73",
              stroke: "color(display-p3 .1137 .749 .451)",
              strokeOpacity: 1,
            }}
          />
          <circle
            cx={10.741}
            cy={11.21}
            r={0.892}
            stroke="#1DBF73"
            strokeLinejoin="round"
            strokeWidth={1.189}
            style={{
              stroke: "#1dbf73",
              stroke: "color(display-p3 .1137 .749 .451)",
              strokeOpacity: 1,
            }}
            transform="rotate(90 10.741 11.21)"
          />
          <circle
            cx={5.093}
            cy={11.21}
            r={0.892}
            stroke="#1DBF73"
            strokeLinejoin="round"
            strokeWidth={1.189}
            style={{
              stroke: "#1dbf73",
              stroke: "color(display-p3 .1137 .749 .451)",
              strokeOpacity: 1,
            }}
            transform="rotate(90 5.093 11.21)"
          />
        </>
      );
    case "visa-icon":
      return (
        <>
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.681}
            fill="#fff"
            rx={2.081}
            style={{
              fill: "#fff",
              fillOpacity: 1,
            }}
          />
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.681}
            stroke="#EAECF0"
            strokeWidth={0.595}
            rx={2.081}
            style={{
              stroke: "#eaecf0",
              stroke: "color(display-p3 .9176 .9255 .9412)",
              strokeOpacity: 1,
            }}
          />
          <path
            fill="#172B85"
            fillRule="evenodd"
            d="M8.926 12.956H7.293l-1.225-4.81c-.058-.22-.181-.416-.363-.508a5.21 5.21 0 0 0-1.496-.509v-.185h2.63c.363 0 .635.278.68.601l.636 3.469 1.632-4.07h1.587l-2.448 6.012Zm3.356 0H10.74l1.27-6.012h1.542l-1.27 6.012Zm3.265-4.347c.045-.323.318-.509.635-.509.5-.046 1.043.047 1.497.278l.272-1.295a3.805 3.805 0 0 0-1.406-.278c-1.496 0-2.586.833-2.586 1.989 0 .879.772 1.34 1.316 1.619.59.277.816.462.771.74 0 .415-.454.6-.907.6-.544 0-1.089-.138-1.587-.37l-.272 1.295c.544.231 1.133.324 1.678.324 1.678.046 2.721-.786 2.721-2.035 0-1.572-2.132-1.664-2.132-2.358Zm7.529 4.347L21.85 6.944h-1.315a.684.684 0 0 0-.635.462l-2.267 5.55h1.587l.317-.879h1.95l.182.879h1.406Zm-2.313-4.393.453 2.265h-1.27l.817-2.265Z"
            clipRule="evenodd"
            style={{
              fill: "#172b85",
              fill: "color(display-p3 .0902 .1686 .5216)",
              fillOpacity: 1,
            }}
          />
        </>
      );
    case "master-card-icon":
      return (
        <>
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.489}
            fill="#fff"
            rx={2.081}
            style={{
              fill: "#fff",
              fillOpacity: 1,
            }}
          />
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.489}
            stroke="#EAECF0"
            strokeWidth={0.595}
            rx={2.081}
            style={{
              stroke: "#eaecf0",
              stroke: "color(display-p3 .9176 .9255 .9412)",
              strokeOpacity: 1,
            }}
          />
          <path
            fill="#ED0006"
            fillRule="evenodd"
            d="M14.022 13.533a5.392 5.392 0 0 1-3.487 1.269c-2.968 0-5.375-2.378-5.375-5.311 0-2.934 2.407-5.312 5.375-5.312 1.33 0 2.548.478 3.487 1.27a5.392 5.392 0 0 1 3.487-1.27c2.968 0 5.375 2.378 5.375 5.312 0 2.933-2.407 5.31-5.375 5.31a5.392 5.392 0 0 1-3.487-1.268Z"
            clipRule="evenodd"
            style={{
              fill: "#ed0006",
              fill: "color(display-p3 .9294 0 .0235)",
              fillOpacity: 1,
            }}
          />
          <path
            fill="#F9A000"
            fillRule="evenodd"
            d="M14.022 13.533a5.274 5.274 0 0 0 1.889-4.042 5.274 5.274 0 0 0-1.889-4.043 5.392 5.392 0 0 1 3.487-1.269c2.968 0 5.375 2.378 5.375 5.312 0 2.933-2.407 5.31-5.375 5.31a5.392 5.392 0 0 1-3.487-1.268Z"
            clipRule="evenodd"
            style={{
              fill: "#f9a000",
              fill: "color(display-p3 .9765 .6275 0)",
              fillOpacity: 1,
            }}
          />
          <path
            fill="#FF5E00"
            fillRule="evenodd"
            d="M14.022 13.533a5.274 5.274 0 0 0 1.889-4.042 5.274 5.274 0 0 0-1.89-4.043 5.274 5.274 0 0 0-1.888 4.043c0 1.618.733 3.068 1.889 4.042Z"
            clipRule="evenodd"
            style={{
              fill: "#ff5e00",
              fill: "color(display-p3 1 .3686 0)",
              fillOpacity: 1,
            }}
          />
        </>
      );
    case "stripe-icon":
      return (
        <>
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.297}
            fill="#fff"
            rx={2.081}
            style={{
              fill: "#fff",
              fillOpacity: 1,
            }}
          />
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.297}
            stroke="#EAECF0"
            strokeWidth={0.595}
            rx={2.081}
            style={{
              stroke: "#eaecf0",
              stroke: "color(display-p3 .9176 .9255 .9412)",
              strokeOpacity: 1,
            }}
          />
          <path
            fill="#6461FC"
            fillRule="evenodd"
            d="m14.885 6.454-1.369.302V5.614l1.37-.297v1.137Zm2.848.633c-.535 0-.879.257-1.07.437l-.07-.348h-1.2v6.532l1.363-.297.006-1.585c.196.145.485.352.965.352.976 0 1.866-.806 1.866-2.582-.006-1.624-.906-2.51-1.86-2.51Zm-.328 3.86c-.322 0-.512-.118-.643-.264l-.006-2.078c.142-.163.338-.275.65-.275.496 0 .84.572.84 1.305 0 .751-.339 1.311-.84 1.311Zm6.486-1.295c0-1.434-.676-2.565-1.97-2.565-1.297 0-2.083 1.131-2.083 2.554 0 1.686.927 2.537 2.258 2.537.65 0 1.14-.15 1.511-.364v-1.12c-.37.19-.796.308-1.336.308-.53 0-.998-.19-1.058-.851h2.667l.004-.182c.003-.11.007-.24.007-.317Zm-2.695-.532c0-.633.377-.896.72-.896.333 0 .688.263.688.896h-1.408Zm-7.68-1.938h1.37v4.901h-1.37V7.182Zm-1.554 0 .087.415c.322-.605.96-.482 1.134-.415V8.47c-.169-.061-.714-.14-1.036.292v3.321h-1.364V7.182h1.179Zm-2.64-1.216-1.332.292-.005 4.487c0 .829.605 1.44 1.413 1.44.447 0 .774-.085.954-.186v-1.137c-.174.073-1.036.33-1.036-.498V8.375h1.036V7.182H9.316l.005-1.216ZM6.097 8.302c-.29 0-.464.084-.464.303 0 .238.3.343.673.473.608.213 1.407.492 1.41 1.527 0 1.002-.78 1.58-1.914 1.58-.47 0-.982-.096-1.49-.32v-1.333c.46.257 1.037.448 1.49.448.306 0 .524-.084.524-.342 0-.264-.326-.385-.72-.53-.598-.223-1.353-.503-1.353-1.436 0-.991.736-1.585 1.844-1.585.452 0 .9.073 1.352.257v1.317a2.98 2.98 0 0 0-1.352-.359Z"
            clipRule="evenodd"
            style={{
              fill: "#6461fc",
              fill: "color(display-p3 .3922 .3804 .9882)",
              fillOpacity: 1,
            }}
          />
        </>
      );
    case "pey-pal-icon":
      return (
        <>
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.912}
            fill="#fff"
            rx={2.081}
            style={{
              fill: "#fff",
              fillOpacity: 1,
            }}
          />
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.912}
            stroke="#EAECF0"
            strokeWidth={0.595}
            rx={2.081}
            style={{
              stroke: "#eaecf0",
              stroke: "color(display-p3 .9176 .9255 .9412)",
              strokeOpacity: 1,
            }}
          />
          <path
            fill="#28356A"
            fillRule="evenodd"
            d="m11.989 15.24.175-1.15-.39-.009H9.913l1.293-8.477a.114.114 0 0 1 .036-.066.104.104 0 0 1 .07-.027h3.138c1.042 0 1.76.224 2.136.667.176.207.288.424.342.663.057.25.058.55.003.914l-.004.027v.233l.176.103c.148.082.266.175.356.281.15.178.248.403.289.67.043.275.028.603-.041.973-.08.426-.21.797-.386 1.1-.16.28-.366.513-.61.692-.233.171-.51.3-.823.384a3.976 3.976 0 0 1-1.027.123h-.245a.727.727 0 0 0-.477.181.771.771 0 0 0-.25.46l-.018.103-.309 2.025-.014.074c-.004.024-.01.035-.02.043a.05.05 0 0 1-.031.012h-1.508Z"
            clipRule="evenodd"
            style={{
              fill: "#28356a",
              fill: "color(display-p3 .1557 .2083 .4152)",
              fillOpacity: 1,
            }}
          />
          <path
            fill="#298FC2"
            fillRule="evenodd"
            d="M17.27 7.809c-.01.062-.02.125-.033.19-.413 2.196-1.83 2.955-3.638 2.955h-.92a.452.452 0 0 0-.443.391l-.605 3.967a.24.24 0 0 0 .233.281h1.633a.397.397 0 0 0 .388-.342l.016-.086.308-2.017.02-.11a.397.397 0 0 1 .388-.344h.244c1.582 0 2.82-.664 3.183-2.585.15-.803.073-1.473-.328-1.944a1.567 1.567 0 0 0-.447-.356Z"
            clipRule="evenodd"
            style={{
              fill: "#298fc2",
              fill: "color(display-p3 .1601 .5617 .7623)",
              fillOpacity: 1,
            }}
          />
          <path
            fill="#22284F"
            fillRule="evenodd"
            d="M16.836 7.63a3.156 3.156 0 0 0-.402-.092 4.955 4.955 0 0 0-.812-.061h-2.46a.38.38 0 0 0-.17.04.404.404 0 0 0-.218.303l-.523 3.425-.015.1a.452.452 0 0 1 .442-.391h.92c1.81 0 3.225-.76 3.64-2.955.012-.065.022-.128.031-.19a2.156 2.156 0 0 0-.433-.179Z"
            clipRule="evenodd"
            style={{
              fill: "#22284f",
              fill: "color(display-p3 .1349 .1581 .3101)",
              fillOpacity: 1,
            }}
          />
          <path
            fill="#28356A"
            fillRule="evenodd"
            d="M12.775 7.82a.403.403 0 0 1 .218-.303.38.38 0 0 1 .17-.04h2.46c.29 0 .563.02.811.061a3.59 3.59 0 0 1 .402.092l.094.03c.122.042.235.092.34.149.123-.812-.001-1.365-.426-1.865-.468-.551-1.313-.787-2.394-.787h-3.138c-.221 0-.41.166-.444.392l-1.307 8.564c-.026.17.1.323.266.323h1.938l1.01-6.616Z"
            clipRule="evenodd"
            style={{
              fill: "#28356a",
              fill: "color(display-p3 .1557 .2083 .4152)",
              fillOpacity: 1,
            }}
          />
        </>
      );
    case "apple-pay":
      return (
        <>
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.335}
            fill="#fff"
            rx={2.081}
            style={{
              fill: "#fff",
              fillOpacity: 1,
            }}
          />
          <rect
            width={26.755}
            height={18.431}
            x={0.701}
            y={0.335}
            stroke="#EAECF0"
            strokeWidth={0.595}
            rx={2.081}
            style={{
              stroke: "#eaecf0",
              stroke: "color(display-p3 .9176 .9255 .9412)",
              strokeOpacity: 1,
            }}
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M7.952 6.652c-.23.279-.598.499-.966.467-.046-.377.135-.778.345-1.025.23-.287.633-.491.958-.507.039.393-.11.778-.337 1.065Zm.334.542c-.325-.02-.62.1-.86.196-.153.062-.283.114-.382.114-.111 0-.247-.055-.399-.117-.2-.081-.427-.174-.667-.17-.548.008-1.057.326-1.337.833-.575 1.014-.15 2.515.406 3.34.272.409.598.856 1.027.84.19-.007.325-.066.465-.127.162-.07.33-.143.593-.143.253 0 .414.07.569.14.146.064.287.127.496.123.445-.008.725-.409.997-.817.294-.439.423-.867.442-.932l.002-.007-.01-.006c-.098-.046-.848-.398-.856-1.342-.007-.793.595-1.194.69-1.257a.272.272 0 0 0 .012-.008c-.384-.582-.981-.645-1.188-.66Zm3.077 4.986V6.054h2.242c1.157 0 1.966.818 1.966 2.012s-.824 2.02-1.997 2.02h-1.283v2.094h-.928Zm.928-5.324h1.069c.805 0 1.264.44 1.264 1.214s-.46 1.218-1.268 1.218H12.29V6.856Zm6.342 4.589c-.245.48-.785.782-1.368.782-.862 0-1.464-.527-1.464-1.32 0-.786.583-1.238 1.66-1.305l1.157-.07v-.338c0-.5-.318-.77-.885-.77-.468 0-.809.247-.878.624h-.835c.027-.793.755-1.371 1.74-1.371 1.061 0 1.751.57 1.751 1.454v3.049h-.858v-.735h-.02Zm-1.119.055c-.494 0-.808-.244-.808-.617 0-.385.302-.609.881-.644l1.031-.067v.346c0 .573-.475.982-1.104.982Zm4.845.92c-.372 1.072-.798 1.426-1.702 1.426-.07 0-.299-.008-.353-.024v-.735c.058.008.2.016.272.016.41 0 .64-.177.782-.636l.085-.272-1.572-4.459h.97l1.092 3.619h.02l1.092-3.619h.942l-1.628 4.683Z"
            clipRule="evenodd"
            style={{
              fill: "#000",
              fillOpacity: 1,
            }}
          />
          q
        </>
      );
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "",
  height = "24",
  width = "24",
  className = "",
  strokeWidth = 1.5,
  bgfill = "none",
  stroke = "",
  stopColor = "",
  iconprimary = "",
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, {
      fill,
      strokeWidth,
      bgfill,
      stroke,
      stopColor,
      iconprimary,
    })}
  </svg>
);

export default SVGIcon;
