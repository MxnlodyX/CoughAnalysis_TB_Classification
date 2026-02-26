import { Container } from "../components/Container"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"

import { User, Mic, FileCheck } from 'lucide-react';
const HowItWorksIcon = [
    {
        icon: User,
        title: "Patient Information",
        description: "Collect patient demographic and medical history data."
    },
    {
        icon: Mic,
        title: "Cough Analysis",
        description: "Analyze cough sounds using AI-powered audio processing."
    },
    {
        icon: FileCheck,
        title: "Diagnosis Report",
        description: "Generate comprehensive TB screening results and recommendations."
    }
]
export function Landing() {
    return (
        <Container>
            <Header />
            <section id="hero" className="flex flex-col px-5 pb-10">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-100/50 my-6 group">
                    <img
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                        src="/assets/docter_diagnosis.jpg"
                        alt="AI TB Screening Analysis"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-900">
                        Provide by Mahidol ICT x Faculty of Medicine Siriraj Hospital
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full w-max border border-blue-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <p className="text-blue-700 text-[12px] font-bold uppercase tracking-wider">Clinical-Grade AI</p>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        AI-Driven TB Screening <br /> via Cough Analysis
                    </h1>
                    <p className="text-gray-600 text-md mt-3 leading-relaxed">
                        Fast, accurate and non-invasive tuberculosis screening using advanced patient data and audio analysis.
                    </p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                    <a href="/scan" className="w-full text-center px-6 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 active:scale-[0.98] transition-all">
                        Start Diagnosis
                    </a>
                    <a href="#how-it-works" className="w-full text-center px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all">
                        Learn More
                    </a>
                </div>
            </section>
            <section id="how-it-works" className="px-5">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
                <div className="box">
                    {HowItWorksIcon.map((item, index) => (
                        <div key={index} className="flex flex-row gap-2 mb-5 border border-gray-200 rounded-lg p-4 items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
                                <item.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-xs text-gray-600 text-start">{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </Container>
    )
}