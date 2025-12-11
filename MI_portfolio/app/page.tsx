import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I&apos;m <span className="font-semibold">Mohammed Iliyas Dokanwale</span>, an aspiring{" "}
                  <span className="font-semibold">Data / Business Analyst</span> with a strong foundation in
                  Computer Science and hands-on experience working with Excel, SQL, Python and modern BI tools.
                  I enjoy turning raw data into clear stories and actionable insights that support better
                  decision-making.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Through academic projects and internships, I&apos;ve worked across the full analytics lifecycle – 
                  from data cleaning and wrangling to KPI calculation, trend and root cause analysis, and 
                  communicating results through dashboards and reports for stakeholders.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My career objective is to contribute in roles where I can gather and document business
                  requirements, analyze data trends, and build visualizations that drive informed decisions and
                  project success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Data Cleaning &amp; Wrangling (Excel, SQL, Python)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Exploratory &amp; Statistical Analysis for business insights
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Dashboarding &amp; Data Visualization (Power BI, Tableau)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      KPI Design, Trend Analysis &amp; Root Cause Analysis
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Data Storytelling, Presentation &amp; Stakeholder Communication
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Labmentix Data Analyst Intern */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Analyst Intern</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Labmentix Pvt Ltd
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    Excel · SQL · Python
                  </p>
                </div>

                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Utilized <strong>Excel, SQL and Python</strong> to perform end-to-end data analysis on
                    large datasets.
                  </li>
                  <li>
                    Cleaned, transformed and visualized data to uncover trends and patterns, improving data
                    quality and usability.
                  </li>
                  <li>
                    Provided <strong>data-driven recommendations</strong> that helped address key business
                    challenges.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Cloud Application Developer Training */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Cloud Application Developer Trainee</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      IT-ITeS Sector Skill Council (NASSCOM) · AIET
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    NSQF Level 5 · 510+ hours
                  </p>
                </div>

                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Completed <strong>510 hours of training</strong> in cloud application development.
                  </li>
                  <li>
                    Gained understanding of cloud architectures, deployment models and application development
                    workflows.
                  </li>
                  <li>
                    Strengthened fundamentals in software development and industry-aligned cloud practices.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Virtual Programs & Certifications */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Virtual Programs &amp; Certifications</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Deloitte · Salesforce · CodeChef
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Ongoing</p>
                </div>

                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Completed <strong>Deloitte Australia Data Analytics Virtual Job Simulation</strong> on
                    Forage.
                  </li>
                  <li>
                    Accredited in the <strong>Virtual Internship Program at Salesforce</strong>.
                  </li>
                  <li>
                    Earned <strong>Basic Programming &amp; Data Structures</strong> certification on CodeChef.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Soft Skills / Activities */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Professional &amp; Soft Skills</h3>
                    <p className="text-purple-600 dark:text-purple-400">
                      Academic &amp; Collaborative Experience
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    Leadership · Teamwork
                  </p>
                </div>

                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Demonstrated <strong>leadership qualities</strong> and the ability to take initiative.</li>
                  <li>
                    Strong <strong>problem-solving</strong> and <strong>decision-making</strong> skills in
                    technical and academic settings.
                  </li>
                  <li>
                    Effective <strong>teamwork</strong>, communication and collaboration in group projects.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

     {/* Projects Section – UPDATED */}
<section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
  <div className="container mx-auto max-w-6xl relative z-10">
    <AnimatedSection>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* 1. Music Store SQL Analysis */}
      <AnimatedCard delay={0.2}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Music Store SQL Analysis (Chinook)</CardTitle>
            <CardDescription>End-to-end SQL analytics on a digital music store</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/sql_music.jpeg" alt="Music Store SQL Analysis" fill className="object-cover" />
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Performed SQL analysis on a Chinook-style music store database, uncovering key insights like top customers, highest-revenue cities, and popular genres.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">MySQL / SQL Server</Badge>
              <Badge variant="outline">Joins &amp; Aggregations</Badge>
              <Badge variant="outline">CTEs</Badge>
              {/* <Badge variant="outline">Window Functions</Badge> */}
              <Badge variant="outline">Excel Cleaning</Badge>
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild variant="outline" className="w-full group relative overflow-hidden">
              <Link href="https://github.com/Iliyas6/SQL-music-store-analysis" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
                <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedCard>
      

      {/* 2. HR Analytics Dashboard */}
      <AnimatedCard delay={0.3}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>HR Attendance Analytics Dashboard</CardTitle>
            <CardDescription>Power BI dashboard for workforce attendance insights</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 hover:scale-[1.02] transition-transform">
              <Image src="/images/HR_analytics.jpeg" alt="HR Attendance Analytics Dashboard" fill className="object-cover" />
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Built an attendance analytics dashboard in Power BI to track employee presence, leaves,
              absenteeism, and punctuality. Includes KPIs, department-wise breakdowns, and interactive filters.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Power BI</Badge>
              <Badge variant="outline">DAX</Badge>
              <Badge variant="outline">Data Modeling</Badge>
              <Badge variant="outline">Time Intelligence</Badge>
              <Badge variant="outline">HR Analytics</Badge>
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild variant="outline" className="w-full group relative overflow-hidden">
              <Link href="https://github.com/Iliyas6/HR-Analytics-Dashboard" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedCard>


      {/* 3. Supermart Sales Dashboard */}
      <AnimatedCard delay={0.4}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Supermart Sales Dashboard</CardTitle>
            <CardDescription>Interactive sales performance dashboard in Power BI</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 hover:scale-[1.02] transition-transform">
              <Image src="/images/supermart.jpeg" alt="Supermart Sales Dashboard" fill className="object-cover" />
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Developed a modern Power BI dashboard to analyze Supermart sales across categories, time periods,
              and payment modes using KPIs, charts, and interactive filters.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Power BI</Badge>
              <Badge variant="outline">DAX</Badge>
              <Badge variant="outline">Excel Dataset</Badge>
              <Badge variant="outline">Sales Analytics</Badge>
              <Badge variant="outline">Data Visualization</Badge>
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild variant="outline" className="w-full group relative overflow-hidden">
              <Link href="https://github.com/Iliyas6/Supermart-Sales-Dashboard-PowerBI" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedCard>


      {/* 4. E-Commerce Sales Dashboard */}
      <AnimatedCard delay={0.5}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>E-Commerce Sales Dashboard</CardTitle>
            <CardDescription>End-to-end Power BI dashboard for online sales</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 hover:scale-[1.02] transition-transform">
              <Image src="/images/E-commerce.jpeg" alt="E-Commerce Sales Dashboard" fill className="object-cover" />
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Interactive Power BI dashboard analyzing online sales, profit, category distribution, customer
              behavior, and region-based insights using Power Query and DAX.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Power BI</Badge>
              <Badge variant="outline">DAX</Badge>
              <Badge variant="outline">Power Query</Badge>
              <Badge variant="outline">EDA</Badge>
              <Badge variant="outline">E-Commerce Analytics</Badge>
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild variant="outline" className="w-full group relative overflow-hidden">
              <Link href="https://github.com/Iliyas6/E-commerce-Sales-Data-analysis-Power-BI-Dashboard" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedCard>

    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Data Analysis & Visualization */}
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">DA</span>
                    </span>
                    Data Analysis &amp; Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Cleaning
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Wrangling
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Exploratory Data Analysis
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Statistical Analysis
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      KPI &amp; Metric Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Trend &amp; Root Cause Analysis
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Dashboard Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Storytelling
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tools & Technologies */}
            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">TO</span>
                    </span>
                    Tools &amp; Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      MS Excel
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      MS Word
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      PowerPoint
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Power BI
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Tableau
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Analysis Libraries
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Databases & Data Handling */}
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">DB</span>
                    </span>
                    Databases &amp; Data Handling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      SQL Queries
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Joins &amp; Aggregations
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Modeling
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      ETL Concepts
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Data Integrity Checks
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Performance Analysis
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Reporting
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Documentation
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Core Computer Science & Soft Skills */}
            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">CS</span>
                    </span>
                    Core CS &amp; Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Computer Science Fundamentals
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Programming Basics
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Problem-Solving
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Decision-Making
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Leadership Qualities
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Teamwork
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Communication
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Time Management
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education &amp; Certifications</h2>
          </AnimatedSection>

          <div className="mb-12 space-y-6">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>

              {/* BE */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Bachelor of Engineering (B.E.), Computer Science
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      Alva&apos;s Institute of Engineering and Technology, Moodbidri
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2021 – 2025</p>
                </div>
              </div>

              {/* PUC */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Pre-University Course (PUC), Science (P.C.M.B.)
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      Samarth PU Science College, Hubli
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2019 – 2021</p>
                </div>
              </div>

              {/* High School */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">High School (C.B.S.E.)</h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      N.L.E. Society&apos;s S.R. Bommai Rotary Public School, Hubli
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2019</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold">
                    Deloitte Australia Data Analytics Virtual Job Simulation (Forage)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed a virtual job simulation focused on real-world data analytics tasks.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold">Salesforce Virtual Internship Program</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Accredited in a Salesforce virtual internship, gaining exposure to CRM and cloud workflows.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold">Basic Programming &amp; Data Structures – CodeChef</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Strengthened core programming and data structure fundamentals through competitive programming.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold">Cloud Application Developer – NSQF Level 5</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Certified by IT-ITeS Sector Skill Council (NASSCOM) for cloud application development training.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Mohammed Iliyas Dokanwale</h2>
              <p className="text-gray-400">Aspiring Data / Business Analyst</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/mohammediliyas"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>

              <Link
                href="mailto:dokanwaleiliyas@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Mohammed Iliyas Dokanwale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
