import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { TEAM_MEMBERS, MILESTONES, ACHIEVEMENTS, VALUES, SHOP_GALLERY, TESTIMONIALS } from '../constants';
import type { TeamMember, Milestone, Achievement, Value } from '../types';

const AboutPage: React.FC = () => {
    const founder = TEAM_MEMBERS[0];

    return (
        <>
            {/* Founder Story Section */}
            <Section id="about" className="bg-cream-200/60">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <SectionTitle subtitle="Meet Mrunali">From My Kitchen to Your Celebration</SectionTitle>
                        <div className="space-y-4 text-sm sm:text-base text-brown-body">
                            <p>
                                From experimenting in her home kitchen to serving thousands of cakes across Pune, Mrunali's journey started with a simple dream: to spread joy through delicious cakes. Every recipe is crafted with premium ingredients, lots of love, and a dash of creative magic.
                            </p>
                            <p>
                                It all began in 2020 when Mrunali baked her first birthday cake for a neighbor. The overwhelming response and the joy she saw on their faces sparked something special. What started as weekend baking experiments soon became a passion that couldn't be contained in a home kitchen.
                            </p>
                            <p>
                                Her first big order came unexpectedly - a 50-person wedding cake. Despite the challenges, she delivered perfection, and word spread quickly. Today, we've grown into a beloved local bakery, but our core values remain the same: using the finest ingredients, crafting with love, and bringing a smile to our customers' faces with every bite.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src={founder.image} alt={founder.name} className="rounded-2xl shadow-xl w-full" />
                        <div className="mt-4 text-center">
                            <h4 className="text-xl sm:text-2xl font-serif text-brown-heading font-bold">{founder.name}</h4>
                            <p className="text-rose-500 font-semibold text-sm sm:text-base">{founder.role}</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Team Introduction */}
            <Section className="bg-white">
                <SectionTitle subtitle="Our Team">Meet the Bakers</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {TEAM_MEMBERS.map((member: TeamMember) => (
                        <div key={member.id} className="bg-cream-100/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                            <img src={member.image} alt={member.name} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-lg object-cover" />
                            <h4 className="mt-4 text-lg sm:text-xl font-serif text-brown-heading font-bold">{member.name}</h4>
                            <p className="text-rose-500 font-semibold text-sm sm:text-base mb-3">{member.role}</p>
                            {member.bio && (
                                <p className="text-xs sm:text-sm text-brown-body mb-3 leading-relaxed">{member.bio}</p>
                            )}
                            {member.favoriteRecipe && (
                                <p className="text-xs sm:text-sm text-brown-body mb-2">
                                    <span className="font-semibold text-brown-heading">Favorite:</span> {member.favoriteRecipe}
                                </p>
                            )}
                            {member.hobbies && (
                                <p className="text-xs text-brown-body">
                                    <span className="font-semibold text-brown-heading">Interests:</span> {member.hobbies}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Values/Mission Section */}
            <Section className="bg-cream-200/60">
                <SectionTitle subtitle="Our Values">What We Stand For</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {VALUES.map((value: Value) => (
                        <div key={value.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{value.icon}</div>
                            <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2 font-bold">{value.title}</h3>
                            <p className="text-sm sm:text-base text-brown-body leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Timeline/History */}
            <Section className="bg-white">
                <SectionTitle subtitle="Our Journey">Milestones & History</SectionTitle>
                <div className="max-w-4xl mx-auto px-4">
                    <div className="relative">
                        {/* Timeline Line - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 transform -translate-x-1/2"></div>
                        {/* Timeline Line for Mobile */}
                        <div className="md:hidden absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-pink-200"></div>
                        
                        <div className="space-y-6 sm:space-y-8 md:space-y-12">
                            {MILESTONES.map((milestone: Milestone, index: number) => (
                                <div key={milestone.id} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full border-2 sm:border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 mt-1.5 sm:mt-2"></div>
                                    
                                    {/* Content */}
                                    <div className={`ml-10 sm:ml-14 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                        <div className="bg-cream-100/50 rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
                                            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-rose-500 mb-2">{milestone.year}</div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-serif text-brown-heading mb-2 font-bold">{milestone.title}</h3>
                                            <p className="text-xs sm:text-sm md:text-base text-brown-body leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Achievements/Press Mentions */}
            <Section className="bg-rose-50">
                <SectionTitle subtitle="Recognition & Achievements">Awards & Press</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {ACHIEVEMENTS.map((achievement: Achievement) => (
                        <div key={achievement.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                            {achievement.year && (
                                <div className="text-rose-500 font-bold text-sm mb-2">{achievement.year}</div>
                            )}
                            <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2 font-bold">{achievement.title}</h3>
                            <p className="text-xs sm:text-sm text-brown-body leading-relaxed">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Photo Gallery */}
            <Section className="bg-white">
                <SectionTitle subtitle="Behind the Scenes">Our Bakery</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {SHOP_GALLERY.map((item) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <img src={item.image} alt={item.caption || 'Gallery'} className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                            {item.caption && (
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-semibold text-sm sm:text-base lg:text-lg px-4 text-center">{item.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Customer Love/Testimonials */}
            <Section className="bg-cream-100">
                <SectionTitle subtitle="Why Our Customers Love Us">Customer Love</SectionTitle>
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-sm sm:text-base text-brown-body mb-8">
                        Our customers are at the heart of everything we do. Here's what they have to say about their experience with us.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
                                    <div>
                                        <h4 className="text-sm sm:text-base font-serif text-brown-800">{testimonial.name}</h4>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-brown-body italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default AboutPage;
