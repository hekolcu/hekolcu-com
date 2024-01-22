import React from 'react';
import { Timeline } from 'primereact/timeline';

const Home = () => {
    const events = [
        {
            status: 'Inference Analytics',
            place: 'Chicago, IL USA, remote from Ankara, Türkiye',
            date: 'September 2023 - Present',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Full Stack Software Engineer, DevOps, MLOps, Containerization.'
        },
        {
            status: 'Amazon',
            place: 'Dublin, Ireland',
            date: 'May 2023 - August 2023',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Software Engineering Internship, AWS CDK, React, OpenSearch.'
        },
        {
            status: 'AMD',
            place: 'Dublin, Ireland',
            date: 'January 2023 - April 2023',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Software Engineering Internship, Python, Bash, ElasticSearch.'
        },
        {
            status: 'High Level Software',
            place: 'Ankara, Türkiye',
            date: 'August 2022 - September 2022',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Software Engineering Internship, C#, ASP.NET.'
        },
        {
            status: 'Innova IT service management company',
            place: 'Ankara, Türkiye',
            date: 'June 2022 - August 2022',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Network Engineer Internship, CCNAv3, Jupiter, Cisco, Huawei, SD-WAN.'
        },
        {
            status: 'Bilkent University',
            place: 'Ankara, Türkiye',
            date: 'September 2018 - Present',
            icon: 'pi pi-briefcase',
            color: '#9C27B0',
            content: 'Lab Assistant for CTIS-152: Computer Algorithms and Data Structures taught in C.'
        }
    ];

    const customizedMarker = (item: any) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: any) => {
        return (
            <>
                <h2>
                    {item.status}
                </h2>
                <h3>
                    {item.place}
                </h3>
                <p>
                    {item.date}
                </p>
                <p>
                    {item.content}
                </p>
            </>
        );
    };

    return (
        <div className="m-2">
            <h2 className="text-center">Professional Experience and Education</h2>
            <Timeline value={events} align="alternate" content={customizedContent} marker={customizedMarker} />
        </div>
    );
};


export default Home;
