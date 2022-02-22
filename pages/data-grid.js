const DefaultCell = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-2">
      {children}
    </div>
  );
};

const CustomCell = ({ children }) => {
  return (
    <div className="flex h-full  w-full items-center justify-center bg-yellow-300 p-2">
      {children}
    </div>
  );
};

const AssayHeaderCells = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-yellow-300 p-2">
      {children}
    </div>
  );
};

// Vertical span columns
const rawSeqReps = [
  {
    id: "header",
    row: [
      { id: "attribution", content: "Attribution", columns: 2 },
      { id: "data", content: "Data", columns: 9 },
    ],
  },
  {
    id: "ENCLB025MTA",
    row: [
      { id: "1", content: "1" },
      { id: "ENCLB025MTA", content: "ENCLB025MTA" },
    ],
    children: [
      {
        id: "ENCFF627NRL",
        row: [
          {
            id: "ENCFF627NRL-ENCFF935LZB",
            content: <a href="#">ENCFF935LZB</a>,
          },
          {
            id: "ENCFF627NRL-fastq",
            content: "fastq",
          },
          { id: "ENCFF627NRL-PE151nt", content: "PE151nt" },
          { id: "ENCFF627NRL-1", content: "1" },
          { id: "ENCFF627NRL-reads", content: "reads" },
          {
            id: "ENCFF627NRL-Mats Ljungman, UMichigan",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "ENCFF627NRL-2020-09-30", content: "2020-09-30" },
          { id: "ENCFF627NRL-5.45 GB", content: "5.45 GB" },
          {
            id: "ENCFF627NRL-released",
            content: <div className="font-bold">released</div>,
          },
        ],
      },
      {
        id: "ENCFF740ARM",
        row: [
          {
            id: "ENCFF740ARM-ENCFF740ARM",
            content: <a href="#">ENCFF740ARM</a>,
          },
          { id: "ENCFF740ARM-fastq", content: "fastq" },
          { id: "ENCFF740ARM-PE151nt", content: "PE151nt" },
          { id: "ENCFF740ARM-2", content: "2" },
          { id: "ENCFF740ARM-reads", content: "reads" },
          {
            id: "ENCFF740ARM-Mats Ljungman, UMichigan",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "ENCFF740ARM-2020-09-30", content: "2020-09-30" },
          { id: "ENCFF740ARM-5.66 GB", content: "5.66 GB" },
          { id: "ENCFF740ARM-released", content: "released" },
        ],
      },
    ],
  },
  {
    id: "ENCLB374BFP",
    row: [{ content: "2" }, { content: "ENCLB374BFP", css: "unique-cell" }],
    children: [
      {
        id: "ENCLB603PXR",
        row: [
          {
            id: "ENCLB603PXR-ENCFF323HQR",
            content: <a href="#">ENCFF323HQR</a>,
          },
          {
            id: "ENCLB603PXR-fastq",
            content: "fastq",
          },
          { id: "ENCLB603PXR-PE151nt", content: "PE151nt" },
          { id: "ENCLB603PXR-1", content: "1" },
          { id: "ENCLB603PXR-reads", content: "reads" },
          {
            id: "ENCLB603PXR-Mats Ljungman, UMichigan",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "ENCLB603PXR-2020-09-30", content: "2020-09-30" },
          { id: "ENCLB603PXR-4.39 GB", content: "4.39 GB" },
          { id: "ENCLB603PXR-released", content: "released" },
        ],
      },
      {
        id: "ENCFF740ARM",
        row: [
          {
            id: "ENCFF740ARM-ENCFF085SJR",
            content: <a href="#">ENCFF085SJR</a>,
          },
          { id: "ENCFF740ARM-fastq", content: "fastq" },
          { id: "ENCFF740ARM-PE151nt", content: "PE151nt" },
          { id: "ENCFF740ARM-2", content: "2" },
          { id: "ENCFF740ARM-reads", content: "reads" },
          {
            id: "ENCFF740ARM-Mats Ljungman, UMichigan",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "ENCFF740ARM-2020-09-30", content: "2020-09-30" },
          { id: "ENCFF740ARM-4.6 GB", content: "4.6 GB" },
          { id: "ENCFF740ARM-released", content: "released" },
        ],
      },
    ],
  },
];

// Horizontal spans.
const assays = [
  {
    id: "titles",
    row: [
      { id: "shRNA RNA-seq", content: "shRNA RNA-seq", columns: 2 },
      { id: "CRISPR RNA-seq", content: "CRISPR RNA-seq", columns: 2 },
      { id: "eCLIP", content: "eCLIP", columns: 2 },
    ],
    RowCells: AssayHeaderCells,
  },
  {
    id: "assays",
    row: [
      { id: "shRNA RNA-seq-1", content: "1" },
      { id: "shRNA RNA-seq-2", content: "2" },
      { id: "shRNA RNA-seq-3", content: "3" },
      { id: "shRNA RNA-seq-4", content: "4" },
      { id: "shRNA RNA-seq-5", content: "5" },
      { id: "shRNA RNA-seq-6", content: "6" },
    ],
  },
];

const DataGrid = ({
  data,
  Cell = DefaultCell,
  startingRow = 1,
  startingCol = 1,
}) => {
  let rowLine = startingRow;
  return data.reduce((acc, rowData) => {
    // Render the cells of a row.
    const childCount = rowData.children?.length || 1;
    let colLine = startingCol;
    const CellWrapper = rowData.RowCells || Cell;
    const row = rowData.row.map((cell) => {
      // Render a single cell.
      const rowRender = (
        <div
          key={cell.id}
          style={{
            gridRow: `${rowLine} / ${rowLine + childCount}`,
            gridColumn: `${colLine} / ${colLine + (cell.columns || 1)}`,
          }}
        >
          <CellWrapper>{cell.content}</CellWrapper>
        </div>
      );
      colLine += cell.columns || 1;
      return rowRender;
    });

    // Render the child rows of the row, if any.
    const children = rowData.children ? (
      <DataGrid
        data={rowData.children}
        Cell={Cell}
        startingRow={rowLine}
        startingCol={colLine}
      />
    ) : (
      []
    );
    rowLine += childCount;
    return acc.concat(row).concat(children);
  }, []);
};

const ExampleGrid = () => {
  return (
    <>
      <div className="m-5 grid gap-px bg-black p-px">
        <DataGrid data={rawSeqReps} />
      </div>
      <div className="m-5 grid gap-px bg-black p-px">
        <DataGrid data={assays} />
      </div>
    </>
  );
};

export default ExampleGrid;
