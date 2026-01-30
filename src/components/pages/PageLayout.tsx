'use client';

import React from 'react';
import Container from '../layout/Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  subtitle,
  className = '',
}) => {
  return (
    <section className={`bg-gradient-to-r from-[#022c22] to-[#065f46] text-white rounded-lg p-8 md:p-12 mb-12 fade-in-left ${className}`}>
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bounce-in">{title}</h1>
        {subtitle && (
          <p className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg md:text-xl leading-relaxed fade-in-left" style={{ animationDelay: '100ms' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gradient-to-b from-gray-900 to-green-900 min-h-screen ${className}`}>
      <Container className={`pt-16 pb-20 px-6 ${className}`}>
        {children}
      </Container>
    </div>
  );
};

interface SectionProps extends PageProps {
  title?: string;
  id?: string;
}

export const PageSection: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
  return (
    <section className={`py-16 md:py-20 ${className}`} id={id}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white fade-in-left">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
