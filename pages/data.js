const data = {
  "@context": "/terms/",
  "@id": "/matrix/?type=Experiment&format=json",
  "@type": ["Matrix"],
  clear_filters: "/matrix/?type=Experiment",
  facet_groups: [],
  filters: [
    {
      field: "type",
      term: "Experiment",
      remove: "/matrix/?format=json",
    },
  ],
  matrix: {
    y: {
      group_by: [
        "replicates.library.biosample.donor.accession",
        "biosample_ontology.term_name",
      ],
      label: "Donor",
      doc_count: 78,
      "replicates.library.biosample.donor.accession": {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: "ENCDO000HUM",
            doc_count: 26,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "K562",
                  doc_count: 15,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Histone ChIP-seq",
                        doc_count: 6,
                      },
                      {
                        key: "total RNA-seq",
                        doc_count: 4,
                      },
                      {
                        key: "Control ChIP-seq",
                        doc_count: 1,
                      },
                      {
                        key: "RAMPAGE",
                        doc_count: 1,
                      },
                      {
                        key: "RRBS",
                        doc_count: 1,
                      },
                      {
                        key: "WGBS",
                        doc_count: 1,
                      },
                      {
                        key: "shRNA RNA-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "A549",
                  doc_count: 5,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "TF ChIP-seq",
                        doc_count: 5,
                      },
                    ],
                  },
                },
                {
                  key: "SK-N-SH",
                  doc_count: 3,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Repli-seq",
                        doc_count: 3,
                      },
                    ],
                  },
                },
                {
                  key: "MCF-7",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "TF ChIP-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "cell-free sample",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Hi-C",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "midbrain",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "microRNA-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO058AAA",
            doc_count: 6,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "midbrain",
                  doc_count: 2,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 2,
                      },
                    ],
                  },
                },
                {
                  key: "regulatory T cell",
                  doc_count: 2,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "ATAC-seq",
                        doc_count: 2,
                      },
                    ],
                  },
                },
                {
                  key: "CD4-positive, alpha-beta memory T cell",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "ATAC-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "K562",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "total RNA-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO000AAK",
            doc_count: 5,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "GM12878",
                  doc_count: 4,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "ATAC-seq",
                        doc_count: 2,
                      },
                      {
                        key: "Control ChIP-seq",
                        doc_count: 1,
                      },
                      {
                        key: "TF ChIP-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "technical sample",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "long read RNA-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO000MUS",
            doc_count: 4,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "CH12.LX cell",
                  doc_count: 3,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Histone ChIP-seq",
                        doc_count: 2,
                      },
                      {
                        key: "Control ChIP-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "cell-free sample",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Hi-C",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO604LIQ",
            doc_count: 3,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "multi-cellular organism",
                  doc_count: 3,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "total RNA-seq",
                        doc_count: 3,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO106AAA",
            doc_count: 2,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "basal cell of epithelium of terminal bronchiole",
                  doc_count: 2,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNAme array",
                        doc_count: 2,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO921RVK",
            doc_count: 2,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "embryonic facial prominence",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
                {
                  key: "heart",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO001MUS",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "CH12.LX cell",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "Histone ChIP-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO017AAA",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "HepG2",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "total RNA-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO242AAA",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "basal cell of epithelium of terminal bronchiole",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNAme array",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO271OUW",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "midbrain",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO451RUA",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "midbrain",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO793LXB",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "midbrain",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            key: "ENCDO845WKR",
            doc_count: 1,
            "biosample_ontology.term_name": {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "midbrain",
                  doc_count: 1,
                  assay_title: {
                    doc_count_error_upper_bound: 0,
                    sum_other_doc_count: 0,
                    buckets: [
                      {
                        key: "DNase-seq",
                        doc_count: 1,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    x: {
      group_by: "assay_title",
      label: "Assay",
      doc_count: 78,
      assay_title: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: "total RNA-seq",
            doc_count: 13,
          },
          {
            key: "DNase-seq",
            doc_count: 11,
          },
          {
            key: "Histone ChIP-seq",
            doc_count: 8,
          },
          {
            key: "TF ChIP-seq",
            doc_count: 8,
          },
          {
            key: "ATAC-seq",
            doc_count: 5,
          },
          {
            key: "DNAme array",
            doc_count: 4,
          },
          {
            key: "Control ChIP-seq",
            doc_count: 3,
          },
          {
            key: "Repli-seq",
            doc_count: 3,
          },
          {
            key: "shRNA RNA-seq",
            doc_count: 3,
          },
          {
            key: "5C",
            doc_count: 1,
          },
          {
            key: "CUT&RUN",
            doc_count: 1,
          },
          {
            key: "CUT&Tag",
            doc_count: 1,
          },
          {
            key: "ChIA-PET",
            doc_count: 1,
          },
          {
            key: "GRO-cap",
            doc_count: 1,
          },
          {
            key: "GRO-seq",
            doc_count: 1,
          },
          {
            key: "Hi-C",
            doc_count: 1,
          },
          {
            key: "PLAC-seq",
            doc_count: 1,
          },
          {
            key: "PRO-cap",
            doc_count: 1,
          },
          {
            key: "RAMPAGE",
            doc_count: 1,
          },
          {
            key: "RNA Bind-n-Seq",
            doc_count: 1,
          },
          {
            key: "RRBS",
            doc_count: 1,
          },
          {
            key: "SPRITE",
            doc_count: 1,
          },
          {
            key: "SPRITE-IP",
            doc_count: 1,
          },
          {
            key: "WGBS",
            doc_count: 1,
          },
          {
            key: "capture Hi-C",
            doc_count: 1,
          },
          {
            key: "icLASER",
            doc_count: 1,
          },
          {
            key: "long read RNA-seq",
            doc_count: 1,
          },
          {
            key: "microRNA-seq",
            doc_count: 1,
          },
          {
            key: "scRNA-seq",
            doc_count: 1,
          },
        ],
      },
    },
  },
  notification: "Success",
  search_base: "/search/?type=Experiment&format=json",
  title: "Matrix",
  total: 78,
}

export const files = [
  {
    accession: "ENCFF885CKX",
    assay_term_name: "microRNA-seq",
    assay_title: "microRNA-seq",
    assembly: "GRCh38",
    award: "U24HG009397",
    biological_replicates: [2],
    biosample_ontology: "/biosample-types/cell_line_EFO_0006711/",
    dataset: "/experiments/ENCSR596ZXX/",
    donors: ["/human-donors/ENCDO351AAA/"],
    file_format: "bigWig",
    file_size: 11903004,
    file_type: "bigWig",
    genome_annotation: "V29",
    href: "/files/ENCFF885CKX/@@download/ENCFF885CKX.bigWig",
    output_type: "minus strand signal of unique reads",
    lab: "/labs/encode-processing-pipeline/",
    processed: true,
    simple_biosample_summary: "",
    status: "released",
    technical_replicates: ["2_1"],
    title: "ENCFF885CKX",
    uuid: "ae1d29e0-e106-423d-9d24-5735be7a710a",
  },
  {
    accession: "ENCFF162DBL",
    assay_term_name: "ChIA-PET",
    assay_title: "ChIA-PET",
    award: "/awards/3UM1HG009409-04S1/",
    biological_replicates: [2],
    biosample_ontology: "/biosample-types/cell_line_EFO_0002824/",
    dataset: "/experiments/ENCSR388DDH/",
    donors: ["/human-donors/ENCDO000ABE/"],
    file_format: "fastq",
    file_size: 35594067382,
    file_type: "fastq",
    href: "/files/ENCFF162DBL/@@download/ENCFF162DBL.fastq.gz",
    lab: "/labs/charles-lee/",
    output_category: "raw data",
    output_type: "reads",
    paired_end: "2",
    paired_with: "/files/ENCFF064PRS/",
    processed: false,
    read_count: 476464527,
    read_length: 150,
    read_length_units: "nt",
    run_type: "paired-ended",
    simple_biosample_summary:
      "treated with 1 \u03bcM 5-Phenyl-1H-indole-3-acetic acid for 6 hours genetically modified (insertion) using CRISPR inserting O. sativa LOC4335696, genetically modified (insertion) using CRISPR targeting H. sapiens CDK7",
    status: "released",
    technical_replicates: ["2_1"],
    title: "ENCFF162DBL",
    uuid: "8be45e7b-b2a4-4976-a290-48d08df07c96",
  },
]

export default data
