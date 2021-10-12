// Vertical span columns
const rawSeqReps = [
    {
        id: 'ENCLB025MTA',
        row: [
            { id: '1', content: '1' },
            { id: 'ENCLB025MTA', content: 'ENCLB025MTA' },
        ],
        css: 'row-data', // row CSS class
        children: [
            {
                id: 'ENCFF627NRL',
                row: [
                    { id: 'ENCFF935LZB', content: <a href="#">ENCFF935LZB</a> },
                    { id: 'fastq', content: 'fastq', style: "font-size: 1.3rem" },
                    { id: 'PE151nt', content: 'PE151nt' },
                    { id: '1', content: '1' },
                    { id: 'reads', content: 'reads' },
                    { id: 'Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: '2020-09-30', content: '2020-09-30' },
                    { id: '5.45 GB', content: '5.45 GB' },
                    { id: 'released', content: <b>released</b> },
                ],
                css: 'file-data',
            },
            {
                id: 'ENCFF740ARM',
                row: [
                    { id: 'ENCFF740ARM', content: <a href="#">ENCFF740ARM</a> },
                    { id: 'fastq', content: 'fastq' },
                    { id: 'PE151nt', content: 'PE151nt' },
                    { id: '2', content: '2' },
                    { id: 'reads', content: 'reads' },
                    { id: 'Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: '2020-09-30', content: '2020-09-30' },
                    { id: '5.66 GB', content: '5.66 GB' },
                    { id: 'released', content: <b>released</b> },
                ],
            },
        ],
    },
    {
        id: 'ENCLB374BFP',
        row: [
            { content: '2' },
            { content: 'ENCLB374BFP', css: 'unique-cell' },
        ],
        style: 'font-weight', // row CSS style
        children: [
            {
                id: 'ENCLB603PXR',
                row: [
                    { id: 'ENCFF323HQR', content: <a href="#">ENCFF323HQR</a> },
                    { id: 'fastq', content: 'fastq', style: "font-size: 1.3rem" },
                    { id: 'PE151nt', content: 'PE151nt' },
                    { id: '1', content: '1' },
                    { id: 'reads', content: 'reads' },
                    { id: 'Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: '2020-09-30', content: '2020-09-30' },
                    { id: '4.39 GB', content: '4.39 GB' },
                    { id: 'released', content: <b>released</b> },
                ],
                css: 'file-data',
            },
            {
                id: 'ENCFF740ARM',
                row: [
                    { id: 'ENCFF085SJR', content: <a href="#">ENCFF085SJR</a> },
                    { id: 'fastq', content: 'fastq' },
                    { id: 'PE151nt', content: 'PE151nt' },
                    { id: '2', content: '2' },
                    { id: 'reads', content: 'reads' },
                    { id: 'Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: '2020-09-30', content: '2020-09-30' },
                    { id: '4.6 GB', content: '4.6 GB' },
                    { id: 'released', content: <b>released</b> },
                ],
            },
        ],
    },
];

// Horizontal spans.
const assays = [
    {
        id: 'assays',
        row: [
            {
                id: 'shRNA RNA-seq',
                cell: 'shRNA RNA-seq',
                children: [
                    { cell: <div /> },
                    { cell: <div /> },
                ],
            },
            {
                id: 'CRISPR RNA-seq',
                cell: 'CRISPR RNA-seq',
                children: [
                    { cell: <div /> },
                    { cell: <div /> },
                ]
            },
            {
                id: 'eCLIP',
                cell: 'eCLIP',
                children: [
                    { cell: <div /> },
                    { cell: <div /> },
                ]
            },
        ],
    },
];


const DataGrid = ({ data }) => {
    const grid = data.reduce((acc, rowData) => {
        const row = rowData.row.map((cell, i) => {
            return <div key={cell.id} className="row-data">{cell.content}</div>;
        });
        return acc.concat(row);
    }, []);
    return grid;
};

const ExampleGrid = () => {
    return (
        <div className="example-grid">
            <DataGrid data={rawSeqReps} />
        </div>
    );
};

export default ExampleGrid;
