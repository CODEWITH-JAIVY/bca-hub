import React from 'react';

const Chapter2_BasicsOfAccounting = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-6">
                Chapter 2: Basics of Accounting
            </h2>

            <p>
                <strong>Q1: What is the accounting equation?</strong>
                <br />
                A1: The accounting equation is the foundation of double-entry bookkeeping. It states that:
                <br />
                <strong>Assets = Liabilities + Equity</strong>
                This equation must always balance because every financial transaction affects both sides of the equation. The left side (assets) represents what the business owns, and the right side (liabilities and equity) represents how those assets are financed.
            </p>

            <p>
                <strong>Q2: What are assets?</strong>
                <br />
                A2: Assets are resources owned by a business that provide future economic benefits. Assets can be classified into two categories:
                <ul>
                    <li><strong>Current Assets</strong>: Assets that are expected to be converted into cash or consumed within a year (e.g., cash, accounts receivable, inventory).</li>
                    <li><strong>Non-Current Assets</strong>: Assets that provide long-term value and are not intended for quick conversion into cash (e.g., property, plant, equipment, intangible assets like patents).</li>
                </ul>
            </p>

            <p>
                <strong>Q3: What are liabilities?</strong>
                <br />
                A3: Liabilities are obligations or debts that a business owes to external parties. Liabilities can also be classified into two categories:
                <ul>
                    <li><strong>Current Liabilities</strong>: Debts that are due within a year (e.g., accounts payable, short-term loans, accrued expenses).</li>
                    <li><strong>Non-Current Liabilities</strong>: Long-term debts that are due beyond one year (e.g., long-term loans, bonds payable).</li>
                </ul>
            </p>

            <p>
                <strong>Q4: What is equity?</strong>
                <br />
                A4: Equity represents the owners' residual interest in the business, i.e., what is left after liabilities are deducted from assets. It is also known as owner’s equity, capital, or net worth. The accounting equation reflects equity as:
                <br />
                <strong>Equity = Assets - Liabilities</strong>
                Common components of equity include retained earnings, paid-up capital, and additional paid-in capital.
            </p>

            <p>
                <strong>Q5: What are the main types of accounts used in accounting?</strong>
                <br />
                A5: The main types of accounts in accounting are:
                <ul>
                    <li><strong>Asset Accounts</strong>: These represent resources owned by the company (e.g., cash, inventory, accounts receivable).</li>
                    <li><strong>Liability Accounts</strong>: These represent obligations or debts the company owes (e.g., loans, accounts payable, accrued expenses).</li>
                    <li><strong>Equity Accounts</strong>: These represent the ownership interest in the company (e.g., capital, retained earnings, shareholder equity).</li>
                    <li><strong>Revenue Accounts</strong>: These represent the income earned by the company from its core business activities (e.g., sales revenue, service income).</li>
                    <li><strong>Expense Accounts</strong>: These represent the costs incurred in running the business (e.g., rent, wages, utilities, depreciation).</li>
                </ul>
            </p>

            <p>
                <strong>Q6: What are journal entries?</strong>
                <br />
                A6: Journal entries are records of financial transactions that show the accounts affected, the amounts involved, and whether each account is debited or credited. Journal entries must follow the double-entry system, where every debit entry has a corresponding credit entry. Each journal entry includes:
                <ul>
                    <li><strong>Date of the transaction</strong></li>
                    <li><strong>Account titles</strong> (accounts affected)</li>
                    <li><strong>Debit and Credit amounts</strong> (which accounts increase or decrease)</li>
                    <li><strong>Transaction description</strong> (brief explanation of the transaction)</li>
                </ul>
                Example:
                <pre>
                    Debit: Cash $500
                    Credit: Sales Revenue $500
                </pre>
            </p>

            <p>
                <strong>Q7: What is a ledger?</strong>
                <br />
                A7: A ledger is a book or computerized record used to summarize all the journal entries for each account. It contains detailed information about each account's balance and the transactions that have affected it. Ledgers allow businesses to keep track of individual accounts such as cash, accounts payable, and inventory. The process of transferring journal entries to the ledger is called posting.
            </p>

            <p>
                <strong>Q8: What is the Double Entry System?</strong>
                <br />
                A8: The double-entry system is a fundamental concept in accounting that ensures every transaction affects at least two accounts in a way that the accounting equation stays balanced. For every debit, there is a corresponding and equal credit. This system helps ensure the accuracy and completeness of financial records.
            </p>

            <p>
                <strong>Q9: What is a trial balance?</strong>
                <br />
                A9: A trial balance is a statement that lists all the general ledger accounts and their balances at a specific point in time. It ensures that the total debits equal the total credits, confirming the correctness of the double-entry system. If the trial balance doesn't balance, it indicates an error in the recording process.
            </p>

            <p>
                <strong>Q10: What is the procedure for preparing and posting journal entries?</strong>
                <br />
                A10: The procedure involves:
                <ol>
                    <li>Identifying the accounts affected by the transaction.</li>
                    <li>Determining which accounts are debited and which are credited.</li>
                    <li>Recording the journal entry in the journal book.</li>
                    <li>Posting the journal entry to the respective accounts in the ledger.</li>
                    <li>Preparing the trial balance to ensure all debits and credits are equal.</li>
                </ol>
            </p>

            <p>
                <strong>Q11: What is the preparation of final accounts?</strong>
                <br />
                A11: The final accounts are prepared at the end of an accounting period to assess the financial performance and position of the business. They include:
                <ul>
                    <li><strong>Profit and Loss Account (Income Statement)</strong>: Shows the company's revenue, expenses, and profits or losses over a specific period.</li>
                    <li><strong>Balance Sheet</strong>: Shows the financial position of the company at a specific point in time, including assets, liabilities, and equity.</li>
                </ul>
            </p>

            <p>
                <strong>Q12: What is the Profit & Loss Account?</strong>
                <br />
                A12: The Profit & Loss Account (Income Statement) summarizes a company's revenues and expenses during a specific period. It helps to determine whether the company is making a profit or incurring a loss. The basic structure is:
                <ul>
                    <li><strong>Revenue (Sales)</strong></li>
                    <li><strong>Less: Cost of Goods Sold (COGS)</strong></li>
                    <li><strong>Gross Profit</strong></li>
                    <li><strong>Less: Operating Expenses</strong> (e.g., rent, wages, utilities)</li>
                    <li><strong>Net Profit/Loss</strong> (the final result)</li>
                </ul>
            </p>

            <p>
                <strong>Q13: What is the Balance Sheet?</strong>
                <br />
                A13: The Balance Sheet is a financial statement that provides a snapshot of a company's financial position at a given point in time. It is structured as follows:
                <ul>
                    <li><strong>Assets</strong> (Current and Non-Current)</li>
                    <li><strong>Liabilities</strong> (Current and Non-Current)</li>
                    <li><strong>Equity</strong> (Owner’s equity or capital)</li>
                </ul>
                The balance sheet follows the accounting equation:
                <strong>Assets = Liabilities + Equity</strong>.
            </p>
        </div>
    );
};

export default Chapter2_BasicsOfAccounting;
