// components/ScheduleInterview.tsx - COMPLETE & FIXED
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, X, CheckCircle, Send } from 'lucide-react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface InterviewFormData {
  name: string;
  email: string;
  company: string;
  position: string;
  date: Date | null;
  time: string;
  message: string;
}

export default function ScheduleInterview() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<InterviewFormData>({
    name: '',
    email: '',
    company: '',
    position: '',
    date: null,
    time: '',
    message: ''
  });

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setFormData(prev => ({ ...prev, date: value }));
    }
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.company && formData.position;
      case 2:
        return formData.date && formData.time;
      case 3:
        return formData.message.length > 10;
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;

    if (step < 3) {
      nextStep();
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using mailto
      sendWithMailTo(formData);
      setIsSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        setIsOpen(false);
        setStep(1);
        setFormData({
          name: '',
          email: '',
          company: '',
          position: '',
          date: null,
          time: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to schedule interview. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendWithMailTo = (data: InterviewFormData) => {
    const subject = `Interview Request - ${data.position} at ${data.company}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Position: ${data.position}
Preferred Date: ${data.date?.toDateString()}
Preferred Time: ${data.time}

Message:
${data.message}

This interview request was sent from your portfolio website.
    `.trim();

    const mailtoLink = `mailto:ammazrafi786@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const resetModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        date: null,
        time: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 300);
  };

  // Get tomorrow's date for calendar minDate
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <>
      {/* Schedule Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
        >
          Schedule a Technical Interview
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-900 rounded-3xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                  <h2 className="text-2xl font-bold text-white">
                    {isSubmitted ? 'Interview Scheduled!' : 'Schedule Technical Interview'}
                  </h2>
                  <button
                    onClick={resetModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Steps */}
                {!isSubmitted && (
                  <div className="px-6 pt-4">
                    <div className="flex items-center justify-between mb-8">
                      {[1, 2, 3].map((stepNumber) => (
                        <div key={stepNumber} className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= stepNumber
                            ? 'bg-accent border-accent text-white'
                            : 'border-gray-600 text-gray-400'
                            }`}>
                            {step > stepNumber ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              stepNumber
                            )}
                          </div>
                          {stepNumber < 3 && (
                            <div className={`w-16 h-1 mx-2 ${step > stepNumber ? 'bg-accent' : 'bg-gray-600'
                              }`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  {isSubmitted ? (
                    // Success State
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                          Interview Scheduled Successfully!
                        </h3>
                        <p className="text-gray-300 mb-4">
                          I've received your interview request and will contact you shortly at {formData.email} to confirm the details.
                        </p>
                        <div className="bg-white/5 rounded-2xl p-4 text-left">
                          <p className="text-white font-semibold">Interview Details:</p>
                          <p className="text-gray-300">Date: {formData.date && formatDate(formData.date)}</p>
                          <p className="text-gray-300">Time: {formData.time}</p>
                          <p className="text-gray-300">Position: {formData.position}</p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    // Form Steps
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Basic Information */}
                      {step === 1 && (
                        <div className="space-y-4">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-white text-sm font-medium mb-2 block">
                                  Full Name *
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="w-full bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300"
                                  placeholder="Your full name"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-white text-sm font-medium mb-2 block">
                                  Email Address *
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="w-full bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300"
                                  placeholder="your.email@company.com"
                                  required
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-white text-sm font-medium mb-2 block">
                                  Company *
                                </label>
                                <input
                                  type="text"
                                  name="company"
                                  value={formData.company}
                                  onChange={handleInputChange}
                                  className="w-full bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300"
                                  placeholder="Company name"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-white text-sm font-medium mb-2 block">
                                  Position *
                                </label>
                                <input
                                  type="text"
                                  name="position"
                                  value={formData.position}
                                  onChange={handleInputChange}
                                  className="w-full bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300"
                                  placeholder="e.g., Senior Backend Developer"
                                  required
                                />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* Step 2: Date & Time */}
                      {step === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="space-y-6">
                            <label className="text-white text-sm font-medium mb-3 block flex items-center gap-2">
                              <CalendarIcon className="w-4 h-4" />
                              Select Date *
                            </label>
                            <div className="bg-slate-800 rounded-2xl p-4 custom-calendar-container">
                              <ReactCalendar
                                onChange={handleDateChange}
                                value={formData.date}
                                minDate={tomorrow}
                                className="custom-react-calendar"
                                view="month"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-white text-sm font-medium mb-3 block flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Select Time *
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => handleTimeSelect(time)}
                                  className={`p-3 rounded-xl border transition-all duration-300 ${formData.time === time
                                    ? 'bg-accent border-accent text-white'
                                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-accent/50'
                                    }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          {formData.date && formData.time && (
                            <div className="bg-accent/20 border border-accent/30 rounded-2xl p-4">
                              <p className="text-white font-semibold">Selected Schedule:</p>
                              <p className="text-gray-300">
                                {formatDate(formData.date)} at {formData.time}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Step 3: Additional Message */}
                      {step === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <label className="text-white text-sm font-medium mb-3 block">
                            Additional Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className="w-full bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                            placeholder="Please share any specific topics you'd like to discuss, technologies to focus on, or any other relevant information..."
                            required
                          />
                          <p className="text-gray-400 text-sm mt-2">
                            Minimum 10 characters required
                          </p>
                        </motion.div>
                      )}
                    </form>
                  )}
                </div>

                {/* Footer */}
                {!isSubmitted && (
                  <div className="flex justify-between p-6 border-t border-slate-700">
                    <button
                      type="button"
                      onClick={step === 1 ? resetModal : prevStep}
                      className="px-6 py-3 text-gray-300 hover:text-white transition-colors rounded-2xl hover:bg-white/5"
                    >
                      {step === 1 ? 'Cancel' : 'Back'}
                    </button>

                    <motion.div
                      whileHover={isStepValid() ? { scale: 1.05 } : {}}
                      whileTap={isStepValid() ? { scale: 0.95 } : {}}
                    >
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!isStepValid() || isSubmitting}
                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                          isStepValid()
                            ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? (
                          'Scheduling...'
                        ) : step === 3 ? (
                          <>
                            <Send className="w-4 h-4" />
                            Schedule Interview
                          </>
                        ) : (
                          'Continue'
                        )}
                      </button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Add these styles to your globals.css */}
      <style jsx global>{`
        .custom-calendar-container {
          background: #1e293b;
          border-radius: 1rem;
        }

        .custom-react-calendar {
          width: 100%;
          background: transparent;
          border: none;
          font-family: inherit;
          color: white;
        }

        /* Navigation */
        .custom-react-calendar .react-calendar__navigation {
          display: flex;
          height: 44px;
          margin-bottom: 1em;
        }

        .custom-react-calendar .react-calendar__navigation button {
          min-width: 44px;
          background: none;
          color: white;
          font-size: 16px;
          border: none;
          cursor: pointer;
          border-radius: 8px;
        }

        .custom-react-calendar .react-calendar__navigation button:hover {
          background: #334155;
        }

        .custom-react-calendar .react-calendar__navigation button:disabled {
          background: transparent;
          color: #6b7280;
        }

        /* Weekdays */
        .custom-react-calendar .react-calendar__month-view__weekdays {
          text-align: center;
          color: #9ca3af;
          font-weight: 500;
          font-size: 0.75em;
          text-transform: uppercase;
          margin-bottom: 0.5em;
        }

        .custom-react-calendar .react-calendar__month-view__weekdays__weekday {
          padding: 0.5em;
        }

        /* Days */
        .custom-react-calendar .react-calendar__month-view__days {
          gap: 2px;
        }

        .custom-react-calendar .react-calendar__tile {
          max-width: 100%;
          padding: 12px 8px;
          background: none;
          text-align: center;
          line-height: 16px;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .custom-react-calendar .react-calendar__tile:enabled:hover {
          background-color: #334155;
          transform: scale(1.05);
        }

        .custom-react-calendar .react-calendar__tile:enabled:focus {
          background-color: #374151;
          outline: none;
        }

        /* Current day */
        .custom-react-calendar .react-calendar__tile--now {
          background: #1e40af;
          color: white;
        }

        .custom-react-calendar .react-calendar__tile--now:enabled:hover {
          background: #1d4ed8;
        }

        /* Active/selected day */
        .custom-react-calendar .react-calendar__tile--active {
          background: #00d4ff !important;
          color: white !important;
          font-weight: 600;
        }

        .custom-react-calendar .react-calendar__tile--active:enabled:hover {
          background: #06b6d4 !important;
        }

        /* Weekend */
        .custom-react-calendar .react-calendar__month-view__days__day--weekend {
          color: #f87171;
        }

        /* Neighboring month */
        .custom-react-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #6b7280;
        }

        /* Disabled days */
        .custom-react-calendar .react-calendar__tile:disabled {
          background: transparent;
          color: #4b5563;
          cursor: not-allowed;
        }

        /* Year view */
        .custom-react-calendar .react-calendar__year-view .react-calendar__tile,
        .custom-react-calendar .react-calendar__decade-view .react-calendar__tile,
        .custom-react-calendar .react-calendar__century-view .react-calendar__tile {
          padding: 1em 0.5em;
        }
      `}</style>
    </>
  );
}