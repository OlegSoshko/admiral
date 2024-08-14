import React, { useState } from 'react';
import { type Column, Table, Button } from '@admiral-ds/react-ui';

enum ColumnKeys {
  id = 'id',
  startDate = 'startDate',
  endDate = 'endDate',
  length = 'length',
  paymentDate = 'paymentDate',
  lastPaymentDate = 'lastPaymentDate',
  expired = 'expired',
  fullAmount = 'fullAmount',
  fullAmountCurrency = 'fullAmountCurrency',
  unpaidBalance = 'unpaidBalance',
  unpaidBalanceCurrency = 'unpaidBalanceCurrency',
  accountedForInSS = 'accountedForInSS',
  accountedForInSSCurrency = 'accountedForInSSCurrency',
  event = 'event',
  commissionType = 'commissionType',
  processingDate = 'processingDate',
  paid = 'paid',
  paidCurrency = 'paidCurrency',
  processedInTransaction = 'processedInTransaction',
  processedInTransactionCurrency = 'processedInTransactionCurrency',
  processingType = 'processingType',
}

const columns: Column[] = [
  { name: ColumnKeys.id, title: 'ID', width: 200 },
  { name: ColumnKeys.startDate, title: 'Дата с', width: 120 },
  { name: ColumnKeys.endDate, title: 'Дата по', width: 120 },
  { name: ColumnKeys.length, title: 'Длина', width: 90 },
  { name: ColumnKeys.paymentDate, title: 'Дата оплаты', width: 130 },
  { name: ColumnKeys.lastPaymentDate, title: 'Последняя дата оплаты', width: 140 },
  { name: ColumnKeys.expired, title: 'Просрочено', width: 150 },
  { name: ColumnKeys.fullAmount, title: 'Полная сумма', width: 180, cellAlign: 'right' },
  { name: ColumnKeys.fullAmountCurrency, title: 'Валюта', width: 90 },
  { name: ColumnKeys.unpaidBalance, title: 'Неоплаченный остаток', width: 180, cellAlign: 'right' },
  { name: ColumnKeys.unpaidBalanceCurrency, title: 'Валюта', width: 90 },
  { name: ColumnKeys.accountedForInSS, title: 'Учтено в СС', width: 180, cellAlign: 'right' },
  { name: ColumnKeys.accountedForInSSCurrency, title: 'Валюта', width: 90 },
  { name: ColumnKeys.event, title: 'Событие', width: 120 },
  { name: ColumnKeys.commissionType, title: 'Тип ком.', width: 120 },
  { name: ColumnKeys.processingDate, title: 'Дата обработки', width: 120 },
  { name: ColumnKeys.paid, title: 'Оплачено', width: 180, cellAlign: 'right' },
  { name: ColumnKeys.paidCurrency, title: 'Валюта', width: 90 },
  { name: ColumnKeys.processedInTransaction, title: 'Обработано в валюте сделке', width: 180, cellAlign: 'right' },
  { name: ColumnKeys.processedInTransactionCurrency, title: 'Валюта', width: 90 },
  { name: ColumnKeys.processingType, title: 'Тип обр.', width: 120 },
];

export const GraphTable: React.FC = () => {
  const [col, setCol] = useState(columns);

  const handleClick = () => {
    if (col.length === 1) {
      setCol(columns);
    } else {
      setCol(col.slice(-1));
    }
  }

  return (
    <>
      <Button onClick={handleClick}>Тык</Button>
      <Table
          greyHeader
          className="graph-table"
          columnList={col}
          headerLineClamp={2}
          rowList={[]}
      />
    </>
  );
};
