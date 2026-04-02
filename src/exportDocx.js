import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Header,
  TabStopPosition,
  TabStopType,
  BorderStyle,
} from 'docx';
import { saveAs } from 'file-saver';

export async function exportToDocx(formData, concerns) {
  const {
    employeeName,
    employeeTitle,
    managerName,
    managerTitle,
    hrContact,
    company,
    department,
    pipDate,
    reviewPeriodEnd,
    reviewPeriod,
    priorFeedback,
    roleLevel,
  } = formData;

  const children = [];

  // Title
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: 'PERFORMANCE IMPROVEMENT PLAN',
          bold: true,
          size: 32,
          font: 'Calibri',
        }),
      ],
    })
  );

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [
        new TextRun({
          text: 'CONFIDENTIAL',
          bold: true,
          size: 20,
          color: '999999',
          font: 'Calibri',
        }),
      ],
    })
  );

  // Employee info section
  const infoLines = [
    ['Employee', employeeName],
    ['Title', `${employeeTitle}${roleLevel ? ` (${roleLevel})` : ''}`],
    ['Manager', managerName],
    ['Manager Title', managerTitle],
    ['HR Contact', hrContact],
    ['Company', company],
    ['Department', department],
    ['PIP Effective Date', pipDate],
    ['Review Period End', reviewPeriodEnd],
    ['Review Period', reviewPeriod],
  ];

  for (const [label, value] of infoLines) {
    if (!value) continue;
    children.push(
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: `${label}: `, bold: true, size: 22, font: 'Calibri' }),
          new TextRun({ text: value || '', size: 22, font: 'Calibri' }),
        ],
      })
    );
  }

  children.push(new Paragraph({ spacing: { after: 200 }, children: [] }));

  // Purpose statement
  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({
          text: 'Purpose',
          bold: true,
          size: 26,
          font: 'Calibri',
        }),
      ],
    })
  );

  children.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: `This Performance Improvement Plan is being issued to ${employeeName} to address specific areas of concern regarding job performance. The intent of this plan is to provide clear expectations, measurable goals, and a defined timeline for improvement. This plan is effective ${pipDate} through ${reviewPeriodEnd}.`,
          size: 22,
          font: 'Calibri',
        }),
      ],
    })
  );

  // Prior feedback
  if (priorFeedback) {
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 },
        children: [
          new TextRun({
            text: 'Prior feedback and context',
            bold: true,
            size: 26,
            font: 'Calibri',
          }),
        ],
      })
    );
    children.push(
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: priorFeedback, size: 22, font: 'Calibri' }),
        ],
      })
    );
  }

  // Concerns
  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 100 },
      children: [
        new TextRun({
          text: 'Areas of concern',
          bold: true,
          size: 26,
          font: 'Calibri',
        }),
      ],
    })
  );

  concerns.forEach((concern, idx) => {
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 80 },
        children: [
          new TextRun({
            text: `${idx + 1}. ${concern.label}`,
            bold: true,
            size: 24,
            font: 'Calibri',
          }),
        ],
      })
    );

    children.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: 'Description of concern:',
            bold: true,
            size: 22,
            font: 'Calibri',
          }),
        ],
      })
    );
    children.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: concern.description, size: 22, font: 'Calibri' }),
        ],
      })
    );

    children.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: 'Expected improvement:',
            bold: true,
            size: 22,
            font: 'Calibri',
          }),
        ],
      })
    );
    children.push(
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: concern.expectation, size: 22, font: 'Calibri' }),
        ],
      })
    );
  });

  // Consequences
  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 100 },
      children: [
        new TextRun({
          text: 'Consequences of non-improvement',
          bold: true,
          size: 26,
          font: 'Calibri',
        }),
      ],
    })
  );
  children.push(
    new Paragraph({
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: `Failure to meet the expectations outlined in this plan by ${reviewPeriodEnd} may result in further disciplinary action, up to and including termination of employment.`,
          size: 22,
          font: 'Calibri',
        }),
      ],
    })
  );

  // Signature lines
  children.push(
    new Paragraph({
      spacing: { before: 400, after: 40 },
      children: [
        new TextRun({
          text: 'Acknowledgment',
          bold: true,
          size: 26,
          font: 'Calibri',
        }),
      ],
    })
  );
  children.push(
    new Paragraph({
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: 'By signing below, the employee acknowledges receipt and understanding of this Performance Improvement Plan. The employee\'s signature does not indicate agreement with the contents of this plan.',
          size: 22,
          font: 'Calibri',
        }),
      ],
    })
  );

  const signatureLines = [
    { label: 'Employee', name: employeeName },
    { label: 'Manager', name: managerName },
    { label: 'Human Resources', name: hrContact },
  ];

  for (const sig of signatureLines) {
    children.push(new Paragraph({ spacing: { after: 10 }, children: [] }));
    children.push(
      new Paragraph({
        spacing: { after: 10 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 1, color: '000000' },
        },
        children: [new TextRun({ text: ' ', size: 22 })],
      })
    );
    children.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: `${sig.label}: ${sig.name}`,
            size: 20,
            font: 'Calibri',
          }),
          new TextRun({ text: '\t\t\t\tDate: _______________', size: 20, font: 'Calibri' }),
        ],
      })
    );
    children.push(new Paragraph({ spacing: { after: 200 }, children: [] }));
  }

  const doc = new Document({
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: `${company || 'Kennedy Wilson'} | ${department || 'Commercial Investment Group'}`,
                    size: 18,
                    color: '666666',
                    font: 'Calibri',
                  }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const filename = `PIP_${(employeeName || 'Employee').replace(/\s+/g, '_')}_${pipDate || 'draft'}.docx`;
  saveAs(blob, filename);
}
