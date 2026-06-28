'use client'
import MetricChart from '../../../components/chart';
import WorkerCard from '../../../components/card';

const Dashbaord = () => {
    const hour = new Date().getHours();

    const currentShift = hour >= 6 && hour < 14 ? 'Morning (06:00 - 13:59)'
          : hour >= 14 && hour < 22 ? 'Afternoon (14:00 - 21:59)'
          : 'Night (22:00 - 05:59)';
    
    const upTime = '00:00:00';
    
    const heartRateData = [
        { time: '10:00', value: 72 },
        { time: '10:05', value: 74 },
        { time: '10:10', value: 71 },
        { time: '10:15', value: 75 },
    ]

    const spo2Data = [
        { time: '10:00', value: 97 },
        { time: '10:05', value: 98 },
        { time: '10:10', value: 99 },
        { time: '10:15', value: 98 },
        ];

    const temperatureData = [
        { time: '10:00', value: 36.4 },
        { time: '10:05', value: 36.5 },
        { time: '10:10', value: 36.7 },
        { time: '10:15', value: 36.6 },
        ];
    
    const gasData = [
        { time: '10:00', value: 10 },
        { time: '10:05', value: 11 },
        { time: '10:10', value: 12 },
        { time: '10:15', value: 10 },
        ];

    

  return (
    
            <div className="flex-1 p-4 overflow-auto">
               <div className="grid grid-cols-12 gap-4 mt-4">
                    <div className="col-span-9 p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                    <WorkerCard />
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <MetricChart
                                title="HEART RATE"
                                value={75}
                                unit="bpm"
                                status="Normal"
                                data={heartRateData}
                                dataKey="value"
                                color="#2563eb"
                                />
                            <MetricChart
                                title="SPO₂"
                                value={98}
                                unit="%"
                                status="Excellent"
                                data={spo2Data}
                                dataKey="value"
                                color="#16a34a"
                                />
                            <MetricChart
                                title="BODY TEMPERATURE"
                                value={36.7}
                                unit="°C"
                                status="Normal"
                                data={temperatureData}
                                dataKey="value"
                                color="#ea580c"
                                />
                            <MetricChart
                                title="GAS LEVEL"
                                value={12}
                                unit="PPM"
                                status="Safe"
                                data={gasData}
                                dataKey="value"
                                color="#10b981"
                                />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">ACTIVE ALERTS</h2>
                            <div className="flex flex-col gap-4">
                                
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">WORKERS ON SITE</h2>
                            <div className="flex flex-col gap-4">
                                
                            </div>
                            <div className="p-4 border-t border-slate-200">
                                <h2 className="text-xl font-semibold text-slate-900 mb-4">SHIFT</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{currentShift}</p>
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900 mb-4">UP-TIME</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{upTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>   
  )
}

export default Dashbaord