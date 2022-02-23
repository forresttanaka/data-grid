import { useState } from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { files } from "./data"

const DefaultCell = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-2">
      {children}
    </div>
  )
}

const CustomCell = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-yellow-300 p-2">
      {children}
    </div>
  )
}

const AssayHeaderCells = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-yellow-300 p-2">
      {children}
    </div>
  )
}

const SortableGridCells = ({ rowData, cellIndex, rowMeta, children }) => {
  const handleSortClick = () => {
    rowMeta.handleSortClick(rowData[cellIndex].id)
  }

  return (
    <button
      type="button"
      onClick={handleSortClick}
      className="flex h-full w-full items-center justify-between bg-gray-200 p-2 font-semibold hover:bg-gray-300"
    >
      {children}{" "}
      {rowMeta.sortBy === rowData[cellIndex].id ? (
        rowMeta.sortDirection === "asc" ? (
          <ChevronUpIcon className="h-6 w-6" />
        ) : (
          <ChevronDownIcon className="h-6 w-6" />
        )
      ) : (
        <div className="h-6 w-6" />
      )}
    </button>
  )
}

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
      { id: "replicate", content: "1" },
      { id: "library", content: "ENCLB025MTA" },
    ],
    children: [
      {
        id: "ENCFF935LZB",
        row: [
          {
            id: "file",
            content: <a href="#">ENCFF935LZB</a>,
          },
          {
            id: "file_type",
            content: "fastq",
          },
          { id: "pair", content: "PE151nt" },
          { id: "replicate", content: "1" },
          { id: "output_type", content: "reads" },
          {
            id: "lab",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "date_created", content: "2020-09-30" },
          { id: "file_size", content: "5.45 GB" },
          {
            id: "status",
            content: <div className="font-bold">released</div>,
          },
        ],
      },
      {
        id: "ENCFF740ARM",
        row: [
          {
            id: "file",
            content: <a href="#">ENCFF740ARM</a>,
          },
          { id: "file_type", content: "fastq" },
          { id: "pair", content: "PE151nt" },
          { id: "replicate", content: "2" },
          { id: "output_type", content: "reads" },
          {
            id: "lab",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "date_created", content: "2020-09-30" },
          { id: "file_size", content: "5.66 GB" },
          { id: "status", content: "released" },
        ],
      },
    ],
  },
  {
    id: "ENCLB374BFP",
    row: [
      { id: "replicate", content: "2" },
      { id: "library", content: "ENCLB374BFP" },
    ],
    children: [
      {
        id: "ENCLB603PXR",
        row: [
          {
            id: "file",
            content: <a href="#">ENCFF323HQR</a>,
          },
          {
            id: "file_type",
            content: "fastq",
          },
          { id: "pair", content: "PE151nt" },
          { id: "replicate", content: "1" },
          { id: "output_type", content: "reads" },
          {
            id: "lab",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "date_created", content: "2020-09-30" },
          { id: "file_size", content: "4.39 GB" },
          { id: "status", content: "released" },
        ],
      },
      {
        id: "ENCFF085SJR",
        row: [
          {
            id: "file",
            content: <a href="#">ENCFF085SJR</a>,
          },
          { id: "file_type", content: "fastq" },
          { id: "pair", content: "PE151nt" },
          { id: "replicate", content: "2" },
          { id: "output_type", content: "reads" },
          {
            id: "lab",
            content: "Mats Ljungman, UMichigan",
          },
          { id: "date_created", content: "2020-09-30" },
          { id: "file_size", content: "4.6 GB" },
          { id: "status", content: "released" },
        ],
      },
    ],
  },
]

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
]

const DataGrid = ({
  data,
  Cell = DefaultCell,
  startingRow = 1,
  startingCol = 1,
}) => {
  let rowLine = startingRow
  return data.reduce((acc, rowData) => {
    // Render the cells of a row.
    const childCount = rowData.children?.length || 1
    let colLine = startingCol
    const CellWrapper = rowData.RowCells || Cell
    const row = rowData.row.map((cell, index) => {
      // Render a single cell.
      const rowRender = (
        <div
          key={`${rowData.id}-${cell.id}`}
          style={{
            gridRow: `${rowLine} / ${rowLine + childCount}`,
            gridColumn: `${colLine} / ${colLine + (cell.columns || 1)}`,
          }}
        >
          <CellWrapper
            rowId={rowData.id}
            rowData={rowData.row}
            rowMeta={rowData.rowMeta}
            cellIndex={index}
          >
            {cell.content}
          </CellWrapper>
        </div>
      )
      colLine += cell.columns || 1
      return rowRender
    })

    // Render the child rows of the row, if any.
    const children = rowData.children ? (
      <DataGrid
        key={`${rowData.id}-children`}
        data={rowData.children}
        Cell={Cell}
        startingRow={rowLine}
        startingCol={colLine}
      />
    ) : null
    rowLine += childCount
    return acc.concat(row).concat(children)
  }, [])
}

const fileCols = [
  {
    id: "accession",
    title: "Accession",
  },
  {
    id: "dataset",
    title: "Dataset",
  },
  {
    id: "file_format",
    title: "File format",
  },
  {
    id: "output_type",
    title: "Output type",
  },
  {
    id: "assembly",
    title: "Mapping assembly",
  },
  {
    id: "status",
    title: "File status",
  },
]

const convertObjectArrayToDataGrid = (items, columns, keyProp) => {
  return items.map((item) => {
    return {
      id: item[keyProp],
      row: columns.map((column) => {
        return { id: column.id, content: item[column.id] }
      }),
    }
  })
}

// enum-like structor to define the column sorting directions.
const sortDirections = {
  // Ascending sort
  ASC: "asc",
  // Descending sort
  DESC: "desc",
}

const sortData = (data, sortBy, sortDirections) => {
  return _.orderBy(data, [sortBy], [sortDirections])
}

/**
 * Display a sortable grid of data according to the provided columns. The data has to be an array
 * of objects requiring no column nor row spans.
 */
const SortableGrid = ({ data, columns, initialSort = {}, keyProp }) => {
  // id of the currently sorted column.
  const [sortBy, setSortBy] = useState(initialSort.columnId || columns[0].id)
  // Whether the currently sorted column is sorted in ascending or descending order.
  const [sortDirection, setSortDirection] = useState(
    initialSort.direction,
    sortDirections.ASC
  )

  /**
   *
   * @param {string} column - id of the column to sort by.
   */
  const handleSortClick = (column) => {
    if (sortBy === column) {
      // Sorted column clicked. Reverse the sort direction.
      setSortDirection(
        sortDirection === sortDirections.ASC
          ? sortDirections.DESC
          : sortDirections.ASC
      )
    } else {
      // New column clicked. Sort by this column.
      setSortBy(column)
      setSortDirection(sortDirections.ASC)
    }
  }

  // Generate the cells within the header row.
  const headerCells = columns.map((column) => {
    return {
      id: column.id,
      content: column.title,
    }
  })

  // Generate the header row itself, containing the cells.
  const headerRow = [
    {
      id: "header",
      row: headerCells,
      rowMeta: { sortBy, sortDirection, handleSortClick },
      RowCells: SortableGridCells,
    },
  ]

  // Convert the data (simple array of objects) into a data grid array and render the table.
  const sortedData = sortData(data, sortBy, sortDirection)
  const dataRows = convertObjectArrayToDataGrid(sortedData, columns, keyProp)
  return <DataGrid data={headerRow.concat(dataRows)} />
}

SortableGrid.propTypes = {
  // Data to display in the sortable grid
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Column definitions for the grid
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Which prop of the objects in the data array to use as the React key
  keyProp: PropTypes.string.isRequired,
  // Optional initial sorting of the grid
  initialSort: PropTypes.shape({
    // id of the column to sort by
    columnId: PropTypes.string,
    // sort direction
    direction: PropTypes.oneOf(Object.values(sortDirections)),
  }),
}

const ExampleGrid = () => {
  return (
    <>
      <div className="m-5 grid gap-px bg-black p-px">
        <DataGrid data={rawSeqReps} />
      </div>
      <div className="m-5 grid gap-px bg-black p-px">
        <DataGrid data={assays} />
      </div>
      <div className="m-5 grid gap-px bg-black p-px">
        <SortableGrid data={files} columns={fileCols} keyProp="uuid" />
      </div>
    </>
  )
}

export default ExampleGrid
