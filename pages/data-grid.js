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
                    { id: 'ENCFF627NRL-ENCFF935LZB', content: <a href="#">ENCFF935LZB</a> },
                    { id: 'ENCFF627NRL-fastq', content: 'fastq', style: "font-size: 1.3rem" },
                    { id: 'ENCFF627NRL-PE151nt', content: 'PE151nt' },
                    { id: 'ENCFF627NRL-1', content: '1' },
                    { id: 'ENCFF627NRL-reads', content: 'reads' },
                    { id: 'ENCFF627NRL-Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: 'ENCFF627NRL-2020-09-30', content: '2020-09-30' },
                    { id: 'ENCFF627NRL-5.45 GB', content: '5.45 GB' },
                    { id: 'ENCFF627NRL-released', content: <b>released</b> },
                ],
                css: 'file-data',
            },
            {
                id: 'ENCFF740ARM',
                row: [
                    { id: 'ENCFF740ARM-ENCFF740ARM', content: <a href="#">ENCFF740ARM</a> },
                    { id: 'ENCFF740ARM-fastq', content: 'fastq' },
                    { id: 'ENCFF740ARM-PE151nt', content: 'PE151nt' },
                    { id: 'ENCFF740ARM-2', content: '2' },
                    { id: 'ENCFF740ARM-reads', content: 'reads' },
                    { id: 'ENCFF740ARM-Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: 'ENCFF740ARM-2020-09-30', content: '2020-09-30' },
                    { id: 'ENCFF740ARM-5.66 GB', content: '5.66 GB' },
                    { id: 'ENCFF740ARM-released', content: <b>released</b> },
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
                    { id: 'ENCLB603PXR-ENCFF323HQR', content: <a href="#">ENCFF323HQR</a> },
                    { id: 'ENCLB603PXR-fastq', content: 'fastq', style: "font-size: 1.3rem" },
                    { id: 'ENCLB603PXR-PE151nt', content: 'PE151nt' },
                    { id: 'ENCLB603PXR-1', content: '1' },
                    { id: 'ENCLB603PXR-reads', content: 'reads' },
                    { id: 'ENCLB603PXR-Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: 'ENCLB603PXR-2020-09-30', content: '2020-09-30' },
                    { id: 'ENCLB603PXR-4.39 GB', content: '4.39 GB' },
                    { id: 'ENCLB603PXR-released', content: <b>released</b> },
                ],
                css: 'file-data',
            },
            {
                id: 'ENCFF740ARM',
                row: [
                    { id: 'ENCFF740ARM-ENCFF085SJR', content: <a href="#">ENCFF085SJR</a> },
                    { id: 'ENCFF740ARM-fastq', content: 'fastq' },
                    { id: 'ENCFF740ARM-PE151nt', content: 'PE151nt' },
                    { id: 'ENCFF740ARM-2', content: '2' },
                    { id: 'ENCFF740ARM-reads', content: 'reads' },
                    { id: 'ENCFF740ARM-Mats Ljungman, UMichigan', content: 'Mats Ljungman, UMichigan' },
                    { id: 'ENCFF740ARM-2020-09-30', content: '2020-09-30' },
                    { id: 'ENCFF740ARM-4.6 GB', content: '4.6 GB' },
                    { id: 'ENCFF740ARM-released', content: <b>released</b> },
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


const DataGrid = ({ data, startingLine = 1 }) => {
    let rowLine = startingLine;
    return data.reduce((acc, rowData) => {
        // Render the contents of the row.
        const childCount = rowData.children ? rowData.children.length : 1;
        const row = rowData.row.map((cell) => {
            return (
                <div key={cell.id} style={{ gridRow: `${rowLine} / ${rowLine + childCount}` }} className="row-data">
                    <div className="cell">
                        {cell.content}
                    </div>
                </div>
            );
        });

        // Render the child rows of the row, if any.
        const children = rowData.children ? <DataGrid data={rowData.children} startingLine={rowLine} /> : [];
        rowLine += childCount;
        return acc.concat(row).concat(children);
    }, []);
};

const ExampleGrid = () => {
    return (
        <div className="example-grid">
            <DataGrid data={rawSeqReps} />
        </div>
    );
};

export default ExampleGrid;
