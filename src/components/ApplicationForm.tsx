"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  role: "patient" | "physician" | "engineer" | "";
  roleAnswer: string;
  resumeOrLinkedin: string;
  motivation: string;
};

export default function ApplicationForm({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const selectedRole = watch("role");

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-4">
          {dict.form.success}
        </h2>
        <Link
          href={`/${lang}`}
          className="text-brand-cyan font-semibold hover:underline"
        >
          {dict.nav.home}
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col gap-6"
    >
      <h2 className="text-3xl font-bold text-tech-slate mb-4">
        {dict.form.title}
      </h2>

      {/* Basic Info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-slate-700 border-b pb-2">
          {dict.form.basicInfo}
        </h3>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            {dict.form.name} *
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition"
          />
          {errors.name && <span className="text-red-500 text-sm">Required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            {dict.form.email} *
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition"
          />
          {errors.email && <span className="text-red-500 text-sm">Required</span>}
        </div>
      </div>

      {/* Role Selection */}
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="text-xl font-semibold text-slate-700 border-b pb-2">
          {dict.form.roleLabel} *
        </h3>
        <select
          {...register("role", { required: true })}
          className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan outline-none bg-white"
        >
          <option value="">-- Select --</option>
          <option value="patient">{dict.form.roleOptions.patient}</option>
          <option value="physician">{dict.form.roleOptions.physician}</option>
          <option value="engineer">{dict.form.roleOptions.engineer}</option>
        </select>
        {errors.role && <span className="text-red-500 text-sm">Required</span>}
      </div>

      {/* Dynamic Role Question */}
      {selectedRole && (
        <div className="flex flex-col gap-4 mt-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <label className="block text-sm font-semibold text-slate-800 mb-1">
            {selectedRole === "patient" && dict.form.patientQuestion}
            {selectedRole === "physician" && dict.form.physicianQuestion}
            {selectedRole === "engineer" && dict.form.engineerQuestion}
            {" *"}
          </label>
          <textarea
            {...register("roleAnswer", { required: true })}
            className="w-full border border-slate-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-brand-cyan outline-none resize-none"
          ></textarea>
          {errors.roleAnswer && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
      )}

      {/* Required Link (Resume or LinkedIn) */}
      <div className="flex flex-col gap-4 mt-4">
        <label className="block text-sm font-medium text-slate-600 mb-1">
          {dict.form.resumeOrLinkedin} *
        </label>
        <p className="text-xs text-slate-500 mb-2">
          {dict.form.resumeOrLinkedinDesc}
        </p>
        <input
          type="url"
          placeholder="https://..."
          {...register("resumeOrLinkedin", { required: true })}
          className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan outline-none transition"
        />
        {errors.resumeOrLinkedin && (
          <span className="text-red-500 text-sm">Required</span>
        )}
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-4 mt-4">
        <label className="block text-sm font-medium text-slate-600 mb-1">
          {dict.form.motivation} *
        </label>
        <textarea
          maxLength={500}
          {...register("motivation", { required: true })}
          className="w-full border border-slate-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-brand-cyan outline-none resize-none"
        ></textarea>
        {errors.motivation && (
          <span className="text-red-500 text-sm">Required</span>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 rounded-xl text-lg transition shadow-md hover:shadow-lg"
      >
        {dict.form.submit}
      </button>
    </form>
  );
}
