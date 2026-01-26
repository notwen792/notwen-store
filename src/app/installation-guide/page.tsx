'use client';

import React, { useState } from 'react';
import { products } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  Wrench,
  BookOpen,
  HelpCircle,
  Settings,
  FileOutput,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const docSections = [
  { id: 'dependencies', label: 'Dependencies', icon: AlertTriangle },
  { id: 'installation', label: 'Installation', icon: Wrench },
  { id: 'guide', label: 'Guide of Use', icon: BookOpen },
  { id: 'faq', label: 'Frequent Questions', icon: HelpCircle },
  { id: 'config', label: 'Configuration', icon: Settings },
  { id: 'exports', label: 'Exports', icon: FileOutput },
];

const genericSteps = [
    'Download the script files from the link provided after purchase.',
    'Unzip the downloaded folder.',
    'Copy the script folder into your server\'s `resources` directory.',
    'Add `ensure [script_name]` to your `server.cfg` file, replacing `[script_name]` with the name of the script folder.',
    'Configure the script via the `config.lua` file (if applicable).',
    'If there is a SQL file, import it into your database.',
    'Restart your server.',
    'If you have any problems, do not hesitate to contact us on our Discord server.'
];

export default function InstallationGuidePage() {
  const scriptProducts = products.filter(p => p.category === 'Scripts');
  const [selectedTopic, setSelectedTopic] = useState<{ scriptId: number | string, sectionId: string }>({ scriptId: 'welcome', sectionId: 'welcome' });
  const [openScripts, setOpenScripts] = useState<Record<string, boolean>>({ welcome: true });

  const selectedScript = scriptProducts.find(p => p.id === selectedTopic.scriptId);

  const toggleScript = (scriptId: number | string) => {
    const scriptIdStr = scriptId.toString();
    setOpenScripts(prev => ({ ...prev, [scriptIdStr]: !prev[scriptIdStr] }));
  };

  return (
    <main className="flex-grow bg-background text-white flex min-h-[calc(100vh-80px)]">
      {/* Left Sidebar */}
      <aside className="w-80 min-h-full bg-card border-r border-border p-4 flex flex-col flex-shrink-0">
        <h2 className="font-headline text-2xl text-white tracking-wider mb-6 px-2">Documentation</h2>
        <nav className="flex flex-col gap-2 overflow-y-auto">
          <div>
            <button
              onClick={() => toggleScript('welcome')}
              className="w-full flex items-center justify-between text-left px-2 py-2 rounded-md hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] transition-colors"
            >
              <span className="font-semibold text-white">Welcome</span>
              {openScripts['welcome'] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
            {openScripts['welcome'] && (
              <ul className="pl-4 mt-2 space-y-1 border-l border-border/50 ml-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTopic({ scriptId: 'welcome', sectionId: 'welcome' });
                    }}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors w-full',
                      selectedTopic.scriptId === 'welcome'
                        ? 'bg-destructive text-white font-semibold'
                        : 'text-muted-foreground hover:text-white hover:bg-white/10'
                    )}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Introduction</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
          {scriptProducts.map(script => (
            <div key={script.id}>
              <button
                onClick={() => toggleScript(script.id)}
                className="w-full flex items-center justify-between text-left px-2 py-2 rounded-md hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] transition-colors"
              >
                <span className="font-semibold text-white">{script.name}</span>
                {openScripts[script.id.toString()] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              {openScripts[script.id.toString()] && (
                <ul className="pl-4 mt-2 space-y-1 border-l border-border/50 ml-2">
                  {docSections.map(section => (
                    <li key={section.id}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTopic({ scriptId: script.id, sectionId: section.id });
                        }}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors w-full',
                          selectedTopic.scriptId === script.id && selectedTopic.sectionId === section.id
                            ? 'bg-destructive text-white font-semibold'
                            : 'text-muted-foreground hover:text-white hover:bg-white/10'
                        )}
                      >
                        <section.icon className="h-4 w-4" />
                        <span>{section.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Right Content */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        {selectedTopic.scriptId === 'welcome' ? (
           <div>
            <h1 className="font-headline text-5xl uppercase tracking-wider text-white mb-2">
              Welcome to the Documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              An introduction to our scripts and the installation process.
            </p>
            <div className="bg-card p-8 rounded-lg border border-border/20">
                <h2 className="font-headline text-3xl tracking-wider mb-6 text-destructive flex items-center gap-3">
                  <BookOpen className="h-6 w-6" />
                  Introduction
                </h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>Welcome to the notwen Store documentation. Here you will find all the necessary information to install and configure our scripts on your FiveM server.</p>
                    <p>Our scripts are designed to be "Plug & Play," which means they are easy to install. However, it's important to follow the steps correctly to avoid any issues.</p>
                    <h3 className="font-headline text-xl tracking-wider pt-4 text-white">General Installation</h3>
                    <p>Each script has its own specific installation guide, but most follow these general steps:</p>
                    <div className="space-y-3 text-muted-foreground pl-4 border-l-2 border-destructive ml-2">
                      {genericSteps.map((step, stepIndex) => (
                      <p key={stepIndex}>
                          <span className="font-bold text-white mr-2">{stepIndex + 1}.</span>
                          {step.replace('[script_name]', 'script_name')}
                      </p>
                      ))}
                    </div>
                    <p className="pt-4">For specific details for each script, please select the script from the menu on the left.</p>
                </div>
            </div>
          </div>
        ) : selectedScript ? (
          <div>
            <h1 className="font-headline text-5xl uppercase tracking-wider text-white mb-2">
              {selectedScript.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Documentation for {selectedScript.name}.
            </p>

            <div className="bg-card p-8 rounded-lg border border-border/20">
              <h2 className="font-headline text-3xl tracking-wider mb-6 text-destructive flex items-center gap-3">
                {docSections.find(sec => sec.id === selectedTopic.sectionId)?.icon &&
                    React.createElement(docSections.find(sec => sec.id === selectedTopic.sectionId)!.icon, { className: 'h-6 w-6' })
                }
                {docSections.find(sec => sec.id === selectedTopic.sectionId)?.label}
              </h2>

              {selectedTopic.sectionId === 'installation' ? (
                 <div className="space-y-3 text-muted-foreground pl-4 border-l-2 border-destructive ml-2">
                    {genericSteps.map((step, stepIndex) => (
                    <p key={stepIndex}>
                        <span className="font-bold text-white mr-2">{stepIndex + 1}.</span>
                        {step.includes('[script_name]') ? step.replace('[script_name]', selectedScript.name.toLowerCase().replace(/ /g, '_')) : step}
                    </p>
                    ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Content for {docSections.find(sec => sec.id === selectedTopic.sectionId)?.label} goes here. This is a placeholder.</p>
              )}
            </div>

          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground text-lg">Select a topic from the sidebar to get started.</p>
          </div>
        )}
      </div>
    </main>
  );
}
