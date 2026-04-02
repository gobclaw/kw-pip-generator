import { useState, useRef } from 'react';
import {
  ROLE_LEVELS,
  CONCERN_CATEGORIES,
  getDefaultDescription,
} from './concernData';
import { exportToDocx } from './exportDocx';

const STEPS = ['Basics', 'Concerns', 'Details', 'Preview & Export'];

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i <= current
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {i + 1}
          </div>
          <span
            className={`text-sm hidden sm:inline ${
              i <= current ? 'text-gray-900 font-medium' : 'text-gray-400'
            }`}
          >
            {label}
          </span>
          {i < STEPS.length - 1 && (
            <div
              className={`w-8 h-0.5 ${
                i < current ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Step1Basics({ form, setForm }) {
  const field = (label, key, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={form[key] || ''}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Employee and plan details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field('Employee name', 'employeeName')}
        {field('Employee title', 'employeeTitle')}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role level
          </label>
          <select
            value={form.roleLevel || ''}
            onChange={(e) => setForm({ ...form, roleLevel: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">Select level...</option>
            {ROLE_LEVELS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        {field('Manager name', 'managerName')}
        {field('Manager title', 'managerTitle')}
        {field('HR contact', 'hrContact')}
        {field('Company', 'company', 'text', 'Kennedy Wilson')}
        {field('Department', 'department', 'text', 'Commercial Investment Group')}
        {field('PIP effective date', 'pipDate', 'date')}
        {field('Review period end', 'reviewPeriodEnd', 'date')}
        {field('Review period (e.g. 60 days, 90 days)', 'reviewPeriod')}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Prior feedback and context
        </label>
        <textarea
          value={form.priorFeedback || ''}
          onChange={(e) => setForm({ ...form, priorFeedback: e.target.value })}
          rows={3}
          placeholder="Summarize any prior verbal or written feedback, coaching sessions, or performance discussions that preceded this PIP."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

function Step2Concerns({ selected, setSelected, businessPlanRefs, setBusinessPlanRefs }) {
  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Select areas of concern</h2>
      <p className="text-sm text-gray-500">
        Tap to select all categories that apply. Default language will be generated based on role level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONCERN_CATEGORIES.map((cat) => {
          const isSelected = selected.includes(cat.id);
          return (
            <div key={cat.id}>
              <button
                type="button"
                onClick={() => toggle(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-800'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {isSelected ? '✓' : ''}
                  </span>
                  {cat.label}
                </span>
              </button>
              {isSelected && cat.hasBusinessPlanField && (
                <div className="mt-2 ml-7">
                  <input
                    type="text"
                    value={businessPlanRefs[cat.id] || ''}
                    onChange={(e) =>
                      setBusinessPlanRefs({
                        ...businessPlanRefs,
                        [cat.id]: e.target.value,
                      })
                    }
                    placeholder="Reference a specific asset or business plan (e.g. Industrial Portfolio, 2024 Business Plan, Q3 leasing targets)"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Step3Details({ selected, roleLevel, businessPlanRefs, details, setDetails }) {
  const cats = CONCERN_CATEGORIES.filter((c) => selected.includes(c.id));

  const ensureDefaults = (catId) => {
    if (details[catId]) return details[catId];
    const ref = businessPlanRefs[catId] || '';
    return getDefaultDescription(catId, roleLevel, ref);
  };

  const updateDetail = (catId, field, value) => {
    setDetails((prev) => ({
      ...prev,
      [catId]: {
        ...ensureDefaults(catId),
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Edit concern details</h2>
      <p className="text-sm text-gray-500">
        Default language has been generated based on the {roleLevel || 'selected'} role level. Edit as needed.
      </p>
      {cats.map((cat) => {
        const data = ensureDefaults(cat.id);
        return (
          <div
            key={cat.id}
            className="border border-gray-200 rounded-lg p-4 space-y-3"
          >
            <h3 className="font-semibold text-gray-900">{cat.label}</h3>
            {businessPlanRefs[cat.id] && (
              <p className="text-xs text-blue-600 bg-blue-50 rounded px-2 py-1 inline-block">
                Business plan reference: {businessPlanRefs[cat.id]}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description of concern
              </label>
              <textarea
                value={data.description}
                onChange={(e) =>
                  updateDetail(cat.id, 'description', e.target.value)
                }
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected improvement
              </label>
              <textarea
                value={data.expectation}
                onChange={(e) =>
                  updateDetail(cat.id, 'expectation', e.target.value)
                }
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Step4Preview({ form, selected, details, businessPlanRefs }) {
  const previewRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const cats = CONCERN_CATEGORIES.filter((c) => selected.includes(c.id));

  const getDetail = (catId) => {
    if (details[catId]) return details[catId];
    return getDefaultDescription(catId, form.roleLevel, businessPlanRefs[catId] || '');
  };

  const concernsForExport = cats.map((cat) => ({
    ...cat,
    ...getDetail(cat.id),
  }));

  const handleCopy = () => {
    const text = previewRef.current?.innerText || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => window.print();

  const handleDocx = () => exportToDocx(form, concernsForExport);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Preview and export</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy text'}
        </button>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Print / PDF
        </button>
        <button
          onClick={handleDocx}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Download Word doc
        </button>
      </div>

      <div
        ref={previewRef}
        className="border border-gray-200 rounded-lg p-6 sm:p-8 bg-white print:border-none print:p-0 space-y-6 text-sm leading-relaxed text-gray-800"
      >
        <div className="text-center">
          <h1 className="text-lg font-bold uppercase tracking-wide">
            Performance Improvement Plan
          </h1>
          <p className="text-xs text-gray-400 mt-1">CONFIDENTIAL</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
          <p><span className="font-semibold">Employee:</span> {form.employeeName}</p>
          <p><span className="font-semibold">Title:</span> {form.employeeTitle}{form.roleLevel ? ` (${form.roleLevel})` : ''}</p>
          <p><span className="font-semibold">Manager:</span> {form.managerName}</p>
          <p><span className="font-semibold">Manager title:</span> {form.managerTitle}</p>
          <p><span className="font-semibold">HR contact:</span> {form.hrContact}</p>
          <p><span className="font-semibold">Company:</span> {form.company}</p>
          <p><span className="font-semibold">Department:</span> {form.department}</p>
          <p><span className="font-semibold">Effective date:</span> {form.pipDate}</p>
          <p><span className="font-semibold">Review period end:</span> {form.reviewPeriodEnd}</p>
          <p><span className="font-semibold">Review period:</span> {form.reviewPeriod}</p>
        </div>

        <div>
          <h2 className="font-bold text-base mb-2">Purpose</h2>
          <p>
            This Performance Improvement Plan is being issued to {form.employeeName} to
            address specific areas of concern regarding job performance. The intent of
            this plan is to provide clear expectations, measurable goals, and a defined
            timeline for improvement. This plan is effective {form.pipDate} through{' '}
            {form.reviewPeriodEnd}.
          </p>
        </div>

        {form.priorFeedback && (
          <div>
            <h2 className="font-bold text-base mb-2">Prior feedback and context</h2>
            <p>{form.priorFeedback}</p>
          </div>
        )}

        <div>
          <h2 className="font-bold text-base mb-3">Areas of concern</h2>
          {cats.map((cat, idx) => {
            const d = getDetail(cat.id);
            return (
              <div key={cat.id} className="mb-5">
                <h3 className="font-semibold mb-1">
                  {idx + 1}. {cat.label}
                </h3>
                <p className="mb-2">
                  <span className="font-medium">Description: </span>
                  {d.description}
                </p>
                <p>
                  <span className="font-medium">Expected improvement: </span>
                  {d.expectation}
                </p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="font-bold text-base mb-2">Consequences of non-improvement</h2>
          <p>
            Failure to meet the expectations outlined in this plan by{' '}
            {form.reviewPeriodEnd} may result in further disciplinary action, up to and
            including termination of employment.
          </p>
        </div>

        <div className="pt-6 space-y-8">
          <h2 className="font-bold text-base">Acknowledgment</h2>
          <p className="text-sm">
            By signing below, the employee acknowledges receipt and understanding of this
            Performance Improvement Plan. The employee's signature does not indicate
            agreement with the contents of this plan.
          </p>
          {[
            { label: 'Employee', name: form.employeeName },
            { label: 'Manager', name: form.managerName },
            { label: 'Human Resources', name: form.hrContact },
          ].map((sig) => (
            <div key={sig.label} className="pt-4">
              <div className="border-b border-gray-400 mb-1" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>
                  {sig.label}: {sig.name}
                </span>
                <span>Date: _______________</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    company: 'Kennedy Wilson',
    department: 'Commercial Investment Group',
    roleLevel: '',
  });
  const [selected, setSelected] = useState([]);
  const [businessPlanRefs, setBusinessPlanRefs] = useState({});
  const [details, setDetails] = useState({});

  const canNext =
    step === 0
      ? form.employeeName && form.roleLevel
      : step === 1
      ? selected.length > 0
      : true;

  // When role level changes, reset details so defaults regenerate
  const setFormWrapped = (newForm) => {
    if (newForm.roleLevel !== form.roleLevel) {
      setDetails({});
    }
    setForm(newForm);
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8 print:hidden">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            KW CIG PIP Generator
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Kennedy Wilson, Commercial Investment Group
          </p>
        </div>

        <StepIndicator current={step} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {step === 0 && <Step1Basics form={form} setForm={setFormWrapped} />}
          {step === 1 && (
            <Step2Concerns
              selected={selected}
              setSelected={setSelected}
              businessPlanRefs={businessPlanRefs}
              setBusinessPlanRefs={setBusinessPlanRefs}
            />
          )}
          {step === 2 && (
            <Step3Details
              selected={selected}
              roleLevel={form.roleLevel}
              businessPlanRefs={businessPlanRefs}
              details={details}
              setDetails={setDetails}
            />
          )}
          {step === 3 && (
            <Step4Preview
              form={form}
              selected={selected}
              details={details}
              businessPlanRefs={businessPlanRefs}
            />
          )}

          <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canNext}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  setStep(0);
                  setForm({
                    company: 'Kennedy Wilson',
                    department: 'Commercial Investment Group',
                    roleLevel: '',
                  });
                  setSelected([]);
                  setBusinessPlanRefs({});
                  setDetails({});
                }}
                className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Start new PIP
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Print-only view */}
      {step === 3 && (
        <div className="hidden print:block">
          <Step4Preview
            form={form}
            selected={selected}
            details={details}
            businessPlanRefs={businessPlanRefs}
          />
        </div>
      )}
    </div>
  );
}
