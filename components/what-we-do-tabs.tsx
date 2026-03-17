"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import {
  Users,
  Building2,
  LineChart,
  Coins,
  Network,
  TrendingUp,
  FileBox,
  ClipboardCheck,
  BookOpen,
  Calculator,
  ShieldCheck,
  Lightbulb,
  Receipt,
  Briefcase,
} from "lucide-react"

const tabs = [
  {
    id: "hr",
    label: "HR",
    title: "People Solutions",
    services: [
      {
        name: "Talent Management",
        description:
          "Talent Management provides end-to-end solutions that align employee performance with strategic goals. Our offerings include executive and specialist search, workforce planning and optimization, and employer branding and talent attraction.",
        icon: Users,
      },
      {
        name: "HR Infrastructure & Operations Excellence",
        description:
          "HR Infrastructure & Operations Excellence strengthens HR foundations to drive operational efficiency, compliance, and people excellence. Our services include HR framework design and implementation, HR department setup and optimization, HR policy development and compliance, employee relations and engagement advisory, HR audit and process improvement, and HR governance and risk management.",
        icon: Building2,
      },
      {
        name: "HR Technology & Analytics",
        description:
          "HR Technology & Analytics drives HR transformation through data-driven insights and digital innovation. Our services include HR system implementation and optimization, HR automation and digital transformation, and HR metrics and KPI dashboards.",
        icon: LineChart,
      },
      {
        name: "Compensation & Human Capital Solutions",
        description:
          "Compensation & Human Capital Solutions aligns rewards, payroll, and people strategies to strengthen talent performance and drive business growth. Our services include total rewards strategy and benchmarking, incentive and recognition programs, job evaluation and role grading, payroll and benefits optimization, and executive compensation advisory.",
        icon: Coins,
      },
      {
        name: "Organizational Design & Culture",
        description:
          "Organizational Design & Culture transforms businesses through organizational structures that support strategy and people excellence. Our services include organizational design and transformation, and change management solutions.",
        icon: Network,
      },
      {
        name: "Performance & Development Solutions",
        description:
          "Performance & Development Solutions optimizes workforce performance through coaching, learning, and development strategies. Our services include performance management frameworks, KPI design and goal setting, appraisal system development, continuous feedback and coaching, leadership and talent development, learning strategy and program design, and executive and management coaching.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    title: "Finance & Advisory Services",
    services: [
      {
        name: "Finance Department Setup and System Foundation",
        description:
          "Finance Department Setup and System Foundation establishes and strengthens financial operations for businesses. Our services include assessment of finance, operations, and staff; presentation and agreement with management; design and development; implementation support; and follow-up with deliverables",
        icon: FileBox,
      },
      {
        name: "Monthly Auditing & Financial Reporting (After Service Setup)",
        description:
          "Monthly Auditing & Financial Reporting (After Service Setup) ensures accurate financial oversight and reporting for businesses. Our services include accounts payable and receivable management, inventory tracking, cash and bank reconciliation, administrative expenses and cost of services management, fixed asset register and depreciation management, and internal auditing with periodic financial reporting.",
        icon: ClipboardCheck,
      },
      {
        name: "Monthly Bookkeeping Service",
        description:
          "Monthly Bookkeeping Service provides accurate and organized financial records for businesses. Our services include transaction recording and categorization, bank and credit card reconciliation, accounts payable and receivable balance checks, and assistance in preparing financial statements for reporting.",
        icon: BookOpen,
      },
      {
        name: "Budgeting Support",
        description:
          "Budgeting Support helps businesses and individuals plan and manage their finances effectively. Our services include income planning, investment planning, tax planning, and expense and estate planning.",
        icon: Calculator,
      },
      {
        name: "External Auditing Services",
        description:
          "External Auditing Services provides independent verification of financial records to ensure accuracy and compliance. Our services include accounts payable and receivable management, inventory tracking, cash and bank reconciliation, administrative expenses and cost of services management, fixed asset register and depreciation management, and external auditing with periodic financial reporting.",
        icon: ShieldCheck,
      },
      {
        name: "Business Plan Preparation and Advisory Service",
        description:
          "Business Plan Preparation and Advisory Service helps businesses create comprehensive and strategic plans for growth. Our services include financial report preparation, costing methods, grant-matching breakdown, fixed assets management, costing preparation, and impact summary.",
        icon: Lightbulb,
      },
      {
        name: "Tax Calculation and Compliance Services",
        description:
          "Tax Calculation and Compliance Services ensures accurate tax management and compliance for businesses. Our services include tax report preparation, advisory services, and e-filing support.",
        icon: Receipt,
      },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment",
    title: "Career solutions for talent & businesses",
    services: [
      {
        name: "Job Academy",
        description:
          "Job Academy provides comprehensive career and learning solutions! Our platform is designed to connect job seekers with the right opportunities and help employers find skilled talent. With our user-friendly tools and learning programs, you can advance your career or build a stronger workforce. Trust us to support your growth — we are confident our solutions will exceed your expectations!",
        icon: Briefcase,
      },
    ],
  },
]

export function WhatWeDoTabs() {
  const [activeTab, setActiveTab] = useState("hr")

  const currentTab = tabs.find((tab) => tab.id === activeTab)

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="border-border flex justify-center gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "pb-4 text-base font-semibold transition-colors md:text-lg",
              activeTab === tab.id
                ? "border-primary text-foreground border-b-2"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {currentTab && (
        <div className="space-y-6 py-4">
          <h3 className="text-center text-3xl font-light tracking-tight md:text-4xl">
            {currentTab.title}
          </h3>

          {currentTab.services ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentTab.services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="space-y-4 p-6">
                    {Icon && (
                      <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                        <Icon className="text-primary h-6 w-6" />
                      </div>
                    )}
                    <h3 className="text-xl">{service.name}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          ) : (
            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-base leading-relaxed">
              {currentTab.description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
